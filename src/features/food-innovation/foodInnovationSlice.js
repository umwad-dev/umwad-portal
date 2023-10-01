import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  approvalFood,
  createFood,
  getAllFood,
} from "./foodInnovationFunctions";

const initialState = {
  foods: [],
  dispatchCounter: 0,
  isLoading: false,
  isCreateLoading: false,
  isSuccess: false,
  message: "",
};

export const approvalFoodAction = createAsyncThunk(
  "food/approvalFood",
  async (data) => {
    const response = await approvalFood(data);

    return response;
  }
);

export const createFoodAction = createAsyncThunk(
  "food/createFood",
  async (data) => {
    const response = await createFood(data);

    return response;
  }
);

export const getAllFoodAction = createAsyncThunk(
  "food/getAllFood",
  async () => {
    const response = await getAllFood();

    return response;
  }
);

const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    refreshFoodCollection: (state, action) => {
      const idx = state.foods.findIndex(
        (food) => food.uid === action.payload.uid
      );

      state.foods[idx].validated = action.payload.validated;
      state.foods[idx].disapproved = action.payload.disapproved;
    },
    resetFoodDispatchCounter: (state) => {
      state.dispatchCounter = 0;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    // auth
    builder.addCase(approvalFoodAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(approvalFoodAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
      state.dispatchCounter = 1;
    });
    builder.addCase(approvalFoodAction.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
      state.dispatchCounter = 1;
    });
    builder.addCase(createFoodAction.pending, (state) => {
      state.isCreateLoading = true;
    });
    builder.addCase(createFoodAction.fulfilled, (state, action) => {
      state.isCreateLoading = false;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
      state.dispatchCounter = 1;
    });
    builder.addCase(createFoodAction.rejected, (state, action) => {
      state.isCreateLoading = false;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
      state.dispatchCounter = 1;
    });
    builder.addCase(getAllFoodAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllFoodAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.foods = action.payload.foods;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
    });
    builder.addCase(getAllFoodAction.rejected, (state, action) => {
      state.isLoading = false;
      state.foods = action.payload.foods;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
    });
  },
});

export const { refreshFoodCollection, resetFoodDispatchCounter } =
  foodSlice.actions;

export default foodSlice.reducer;
