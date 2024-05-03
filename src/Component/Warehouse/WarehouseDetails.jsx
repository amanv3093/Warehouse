// WarehouseDetails.js
import React, { useEffect, useState } from "react";
import "./WarehouseDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { handelWarehouseData } from "../../Redux/slice/AllWarehouseData.js"; // Update the path accordingly

function WarehouseDetails() {
  const dispatch = useDispatch();
  const params = useParams();
  const [pageData, setPageData] = useState([]);
  const data = useSelector((state) => state.warehouseData.data);

  const editNameAndCity = () => {
    const updatedData = data.map((elem, index) => {
      return elem.id === Number(params.id)
        ? { ...elem, name: "New Name", city: "New City" }
        : elem;
    });
    console.log("Updated Data:", updatedData);
    dispatch(handelWarehouseData(updatedData));
  };

  useEffect(() => {
    const filterData = data.filter((e) => e.id === Number(params.id));

    setPageData(filterData);
  }, [data, params.id]);

  return (
    <div className="warehouseDetails">
      <div className="warehouseDetails-box">
        {pageData.map((elem, index) => (
          <div key={index}>
            <div className="warehouseDetails-InnerBox">
              <p>Name :</p>{" "}
              <input type="text" placeholder={elem.name} disabled />{" "}
            </div>
            <div className="warehouseDetails-InnerBox">
              <p>Code :</p>
              <input type="text" placeholder={elem.code} disabled />
            </div>
            <div className="warehouseDetails-InnerBox">
              <p>City :</p>
              <input type="text" placeholder={elem.city} disabled />
            </div>
            <div className="warehouseDetails-InnerBox">
              <p>Space_available :</p>{" "}
              <input type="text" placeholder={elem.space_available} disabled />
            </div>
            <div className="warehouseDetails-InnerBox">
              <p>Type :</p>
              <input type="text" placeholder={elem.type} disabled />
            </div>
            <div className="warehouseDetails-InnerBox">
              <p>Cluster :</p>{" "}
              <input type="text" placeholder={elem.cluster} disabled />
            </div>
            <div className="live">
              <p>
                Is_registered :{" "}
                <span class="material-symbols-outlined">
                  {elem.is_registered === true ? "done" : "close"}
                </span>
              </p>
              <p>
                Is_live :
                <span
                  class="material-symbols-outlined point"
                  style={{ color: elem.is_live === true ? "green" : "red" }}
                >
                  radio_button_unchecked
                </span>
              </p>
            </div>
          </div>
        ))}
        <div className="btn-box">
          <button onClick={editNameAndCity}>Change</button>
          <button onClick={editNameAndCity}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default WarehouseDetails;
