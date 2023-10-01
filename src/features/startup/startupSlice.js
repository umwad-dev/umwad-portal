import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  approvalStartup,
  createStartup,
  getAllStartup,
} from "./startupFunctions";

const initialState = {
  startups: [],
  dispatchCounter: 0,
  isLoading: false,
  isCreateLoading: false,
  isSuccess: false,
  message: "",
};

export const approvalStartupAction = createAsyncThunk(
  "startup/approvalStartup",
  async (startup) => {
    const response = await approvalStartup(startup);

    return response;
  }
);

export const createStartupAction = createAsyncThunk(
  "startup/createStartup",
  async (startupDetails) => {
    const response = await createStartup(startupDetails);

    return response;
  }
);

export const getAllStartupAction = createAsyncThunk(
  "startup/getAllStartup",
  async () => {
    const response = await getAllStartup();

    return response;
  }
);

const startupSlice = createSlice({
  name: "startup",
  initialState,
  reducers: {
    resetStartupDispatchCounter: (state) => {
      state.dispatchCounter = 0;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(approvalStartupAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(approvalStartupAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
      state.dispatchCounter = 1;
    });
    builder.addCase(approvalStartupAction.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
      state.dispatchCounter = 1;
    });
    builder.addCase(createStartupAction.pending, (state) => {
      state.isCreateLoading = true;
    });
    builder.addCase(createStartupAction.fulfilled, (state, action) => {
      state.isCreateLoading = false;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
      state.dispatchCounter = 1;
    });
    builder.addCase(createStartupAction.rejected, (state, action) => {
      state.isCreateLoading = false;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
      state.dispatchCounter = 1;
    });
    builder.addCase(getAllStartupAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllStartupAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.startups = action.payload.startups;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
    });
    builder.addCase(getAllStartupAction.rejected, (state, action) => {
      state.isLoading = false;
      state.startups = action.payload.startups;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
    });
  },
});

export const { resetStartupDispatchCounter } = startupSlice.actions;

export default startupSlice.reducer;
