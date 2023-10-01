import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { approvalTBI, createTBI, getAllTBI } from "./tbiFunctions";

const initialState = {
  tbis: [],
  dispatchCounter: 0,
  isLoading: false,
  isCreateLoading: false,
  isSuccess: false,
  message: "",
};

export const approvalTBIAction = createAsyncThunk(
  "tbi/approvalTBI",
  async (tbi) => {
    const response = await approvalTBI(tbi);

    return response;
  }
);

export const createTBIAction = createAsyncThunk(
  "tbi/createTBI",
  async (tbiDetails) => {
    const response = await createTBI(tbiDetails);

    return response;
  }
);

export const getAllTBIAction = createAsyncThunk("tbi/getAllTBI", async () => {
  const response = await getAllTBI();

  return response;
});

const tbiSlice = createSlice({
  name: "tbi",
  initialState,
  reducers: {
    refreshTBICollection: (state, action) => {
      const idx = state.tbis.findIndex((tbi) => tbi.uid === action.payload.uid);

      state.tbis[idx].validated = action.payload.validated;
      state.tbis[idx].disapproved = action.payload.disapproved;
    },
    resetTBIDispatchCounter: (state) => {
      state.dispatchCounter = 0;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    // auth
    builder.addCase(approvalTBIAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(approvalTBIAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
      state.dispatchCounter = 1;
    });
    builder.addCase(approvalTBIAction.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
      state.dispatchCounter = 1;
    });
    builder.addCase(createTBIAction.pending, (state) => {
      state.isCreateLoading = true;
    });
    builder.addCase(createTBIAction.fulfilled, (state, action) => {
      state.isCreateLoading = false;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
      state.dispatchCounter = 1;
    });
    builder.addCase(createTBIAction.rejected, (state, action) => {
      state.isCreateLoading = false;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
      state.dispatchCounter = 1;
    });
    builder.addCase(getAllTBIAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllTBIAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.tbis = action.payload.tbis;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
    });
    builder.addCase(getAllTBIAction.rejected, (state, action) => {
      state.isLoading = false;
      state.tbis = action.payload.tbis;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
    });
  },
});

export const { refreshTBICollection, resetTBIDispatchCounter } =
  tbiSlice.actions;

export default tbiSlice.reducer;
