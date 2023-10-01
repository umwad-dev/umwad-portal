import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  approvalAccelerator,
  createAccelerator,
  getAllAccelerator,
} from "./acceleratorFunctions";

const initialState = {
  accelerators: [],
  dispatchCounter: 0,
  isLoading: false,
  isCreateLoading: false,
  isSuccess: false,
  message: "",
};

export const approvalAcceleratorAction = createAsyncThunk(
  "accelerator/approvalAccelerator",
  async (data) => {
    const response = await approvalAccelerator(data);

    return response;
  }
);

export const createAcceleratorAction = createAsyncThunk(
  "accelerator/createAccelerator",
  async (data) => {
    const response = await createAccelerator(data);

    return response;
  }
);

export const getAllAcceleratorAction = createAsyncThunk(
  "accelerator/getAllAccelerator",
  async () => {
    const response = await getAllAccelerator();

    return response;
  }
);

const acceleratorSlice = createSlice({
  name: "accelerator",
  initialState,
  reducers: {
    refreshAcceleratorCollection: (state, action) => {
      const idx = state.accelerators.findIndex(
        (accelerator) => accelerator.uid === action.payload.uid
      );

      state.accelerators[idx].validated = action.payload.validated;
      state.accelerators[idx].disapproved = action.payload.disapproved;
    },
    resetAcceleratorDispatchCounter: (state) => {
      state.dispatchCounter = 0;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    // auth
    builder.addCase(approvalAcceleratorAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(approvalAcceleratorAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
      state.dispatchCounter = 1;
    });
    builder.addCase(approvalAcceleratorAction.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
      state.dispatchCounter = 1;
    });
    builder.addCase(createAcceleratorAction.pending, (state) => {
      state.isCreateLoading = true;
    });
    builder.addCase(createAcceleratorAction.fulfilled, (state, action) => {
      state.isCreateLoading = false;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
      state.dispatchCounter = 1;
    });
    builder.addCase(createAcceleratorAction.rejected, (state, action) => {
      state.isCreateLoading = false;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
      state.dispatchCounter = 1;
    });
    builder.addCase(getAllAcceleratorAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllAcceleratorAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.accelerators = action.payload.accelerators;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
    });
    builder.addCase(getAllAcceleratorAction.rejected, (state, action) => {
      state.isLoading = false;
      state.accelerators = action.payload.accelerators;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
    });
  },
});

export const { refreshAcceleratorCollection, resetAcceleratorDispatchCounter } =
  acceleratorSlice.actions;

export default acceleratorSlice.reducer;
