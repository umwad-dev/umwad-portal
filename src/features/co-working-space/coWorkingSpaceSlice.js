import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  approvalCoWorkingSpace,
  createCoWorkingSpace,
  getAllCoWorkingSpace,
} from "./coWorkingSpaceFunctions";

const initialState = {
  coWorkingSpaces: [],
  dispatchCounter: 0,
  isLoading: false,
  isCreateLoading: false,
  isSuccess: false,
  message: "",
};

export const approvalCoWorkingSpaceAction = createAsyncThunk(
  "coWorkingSpace/approvalCoWorkingSpace",
  async (data) => {
    const response = await approvalCoWorkingSpace(data);

    return response;
  }
);

export const createCoWorkingSpaceAction = createAsyncThunk(
  "coWorkingSpace/createCoWorkingSpace",
  async (data) => {
    const response = await createCoWorkingSpace(data);

    return response;
  }
);

export const getAllCoWorkingSpaceAction = createAsyncThunk(
  "coWorkingSpace/getAllCoWorkingSpace",
  async () => {
    const response = await getAllCoWorkingSpace();

    return response;
  }
);

const coWorkingSpaceSlice = createSlice({
  name: "coWorkingSpace",
  initialState,
  reducers: {
    refreshCoWorkingSpaceCollection: (state, action) => {
      const idx = state.coWorkingSpaces.findIndex(
        (coWorkingSpace) => coWorkingSpace.uid === action.payload.uid
      );

      state.coWorkingSpaces[idx].validated = action.payload.validated;
      state.coWorkingSpaces[idx].disapproved = action.payload.disapproved;
    },
    resetCoWorkingSpaceDispatchCounter: (state) => {
      state.dispatchCounter = 0;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    // auth
    builder.addCase(approvalCoWorkingSpaceAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(approvalCoWorkingSpaceAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
      state.dispatchCounter = 1;
    });
    builder.addCase(approvalCoWorkingSpaceAction.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
      state.dispatchCounter = 1;
    });
    builder.addCase(createCoWorkingSpaceAction.pending, (state) => {
      state.isCreateLoading = true;
    });
    builder.addCase(createCoWorkingSpaceAction.fulfilled, (state, action) => {
      state.isCreateLoading = false;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
      state.dispatchCounter = 1;
    });
    builder.addCase(createCoWorkingSpaceAction.rejected, (state, action) => {
      state.isCreateLoading = false;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
      state.dispatchCounter = 1;
    });
    builder.addCase(getAllCoWorkingSpaceAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllCoWorkingSpaceAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.coWorkingSpaces = action.payload.coWorkingSpaces;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
    });
    builder.addCase(getAllCoWorkingSpaceAction.rejected, (state, action) => {
      state.isLoading = false;
      state.coWorkingSpaces = action.payload.coWorkingSpaces;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
    });
  },
});

export const {
  refreshCoWorkingSpaceCollection,
  resetCoWorkingSpaceDispatchCounter,
} = coWorkingSpaceSlice.actions;

export default coWorkingSpaceSlice.reducer;
