import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tbiServices: [],
};

const tbiServicesSlice = createSlice({
  name: "tbiServices",
  initialState,
  reducers: {},
});

export const {} = tbiServicesSlice.actions;

export default tbiServicesSlice.reducer;
