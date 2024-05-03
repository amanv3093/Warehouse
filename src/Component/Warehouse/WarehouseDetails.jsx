import React from "react";
import { NavLink } from "react-router-dom";

function WarehouseDetails() {
  return (
    <div>
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
      <NavLink to="WarehouseDetail">
        <button>Details</button>
      </NavLink>
    </div>
  );
}

export default WarehouseDetails;
