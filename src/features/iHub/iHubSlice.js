import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { approvalIHub, createIHub, getAllIHub } from "./iHubFunctions";

const initialState = {
  iHubs: [],
  dispatchCounter: 0,
  isLoading: false,
  isCreateLoading: false,
  isSuccess: false,
  message: "",
};

export const approvalIHubAction = createAsyncThunk(
  "iHub/approvalIHub",
  async (data) => {
    const response = await approvalIHub(data);

    return response;
  }
);

export const createIHubAction = createAsyncThunk(
  "iHub/createIHub",
  async (data) => {
    const response = await createIHub(data);

    return response;
  }
);

export const getAllIHubAction = createAsyncThunk(
  "iHub/getAllIHub",
  async () => {
    const response = await getAllIHub();

    return response;
  }
);

const iHubSlice = createSlice({
  name: "iHub",
  initialState,
  reducers: {
    refreshIHubCollection: (state, action) => {
      const idx = state.iHubs.findIndex(
        (iHub) => iHub.uid === action.payload.uid
      );

      state.iHubs[idx].validated = action.payload.validated;
      state.iHubs[idx].disapproved = action.payload.disapproved;
    },
    resetIHubDispatchCounter: (state) => {
      state.dispatchCounter = 0;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    // auth
    builder.addCase(approvalIHubAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(approvalIHubAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
      state.dispatchCounter = 1;
    });
    builder.addCase(approvalIHubAction.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
      state.dispatchCounter = 1;
    });
    builder.addCase(createIHubAction.pending, (state) => {
      state.isCreateLoading = true;
    });
    builder.addCase(createIHubAction.fulfilled, (state, action) => {
      state.isCreateLoading = false;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
      state.dispatchCounter = 1;
    });
    builder.addCase(createIHubAction.rejected, (state, action) => {
      state.isCreateLoading = false;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
      state.dispatchCounter = 1;
    });
    builder.addCase(getAllIHubAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllIHubAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.iHubs = action.payload.iHubs;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
    });
    builder.addCase(getAllIHubAction.rejected, (state, action) => {
      state.isLoading = false;
      state.iHubs = action.payload.iHubs;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
    });
  },
});

export const { refreshIHubCollection, resetIHubDispatchCounter } =
  iHubSlice.actions;

export default iHubSlice.reducer;
