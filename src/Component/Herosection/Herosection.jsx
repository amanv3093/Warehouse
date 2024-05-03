import React from "react";
import "./Herosection.css";
import { useSelector } from "react-redux";

function Herosection() {
  let data = useSelector((state) => state.warehouseData.data2);
  console.log(data);
  return (
    <section className="hero-section">
      <div className="main-box">
        {data.map((elem, index) => (
          <div className="box">
            <p>Name : {elem.name}</p>
            <p>code : {elem.code}</p>
            <p>city : {elem.city}</p>
            <p>space_available : {elem.space_available}</p>
            <p>type : {elem.type}</p>
            <p>cluster : {elem.cluster}</p>
            <p>is_registered : {elem.is_registered}</p>
            <p>is_live : {elem.is_live}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Herosection;
