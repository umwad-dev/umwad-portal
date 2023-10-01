import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { approvalFabLab, createFabLab, getAllFabLab } from "./fabLabFunctions";

const initialState = {
  fabLabs: [],
  dispatchCounter: 0,
  isLoading: false,
  isCreateLoading: false,
  isSuccess: false,
  message: "",
};

export const approvalFabLabAction = createAsyncThunk(
  "fabLab/approvalFabLab",
  async (data) => {
    const response = await approvalFabLab(data);

    return response;
  }
);

export const createFabLabAction = createAsyncThunk(
  "fabLab/createFabLab",
  async (data) => {
    const response = await createFabLab(data);

    return response;
  }
);

export const getAllFabLabAction = createAsyncThunk(
  "fabLab/getAllFabLab",
  async () => {
    const response = await getAllFabLab();

    return response;
  }
);

const fabLabSlice = createSlice({
  name: "fabLab",
  initialState,
  reducers: {
    refreshFabLabCollection: (state, action) => {
      const idx = state.fabLabs.findIndex(
        (fabLab) => fabLab.uid === action.payload.uid
      );

      state.fabLabs[idx].validated = action.payload.validated;
      state.fabLabs[idx].disapproved = action.payload.disapproved;
    },
    resetFabLabDispatchCounter: (state) => {
      state.dispatchCounter = 0;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    // auth
    builder.addCase(approvalFabLabAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(approvalFabLabAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
      state.dispatchCounter = 1;
    });
    builder.addCase(approvalFabLabAction.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
      state.dispatchCounter = 1;
    });
    builder.addCase(createFabLabAction.pending, (state) => {
      state.isCreateLoading = true;
    });
    builder.addCase(createFabLabAction.fulfilled, (state, action) => {
      state.isCreateLoading = false;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
      state.dispatchCounter = 1;
    });
    builder.addCase(createFabLabAction.rejected, (state, action) => {
      state.isCreateLoading = false;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
      state.dispatchCounter = 1;
    });
    builder.addCase(getAllFabLabAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllFabLabAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.fabLabs = action.payload.fabLabs;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
    });
    builder.addCase(getAllFabLabAction.rejected, (state, action) => {
      state.isLoading = false;
      state.fabLabs = action.payload.fabLabs;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
    });
  },
});

export const { refreshFabLabCollection, resetFabLabDispatchCounter } =
  fabLabSlice.actions;

export default fabLabSlice.reducer;
