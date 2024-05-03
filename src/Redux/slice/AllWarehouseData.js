import { createSlice } from "@reduxjs/toolkit";
import data from "../../Data.json";

export const warehouseDataSlice = createSlice({
  name: "warehouseDataSlice",
  initialState: { data: data, data2: data },
  reducers: {
    handelWarehouseData: () => {
      console.log(data);
    },
    handelFilterWarehouseData: (state, actions) => {
      state.data2 = actions.payload;
      console.log(state.data2);
    },
  },
});

export const { handelWarehouseData, handelFilterWarehouseData } =
  warehouseDataSlice.actions;

export default warehouseDataSlice.reducer;
