import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUser,
  resetPasswordByEmail,
  signInUsingAdmin,
  signInUsingEmailAndPassword,
  signOutUser,
} from "./authFunctions";

const initialState = {
  auth: null,
  dispatchCounter: 0,
  isSuccess: false,
  isGoogleLoginLoading: false,
  isGoogleRegistrationLoading: false,
  isLoginLoading: false,
  isLogoutLoading: false,
  isRegistrationLoading: false,
  isResetLoading: false,
  message: "",
};

export const createUserAction = createAsyncThunk(
  "auth/createUser",
  async (userInput) => {
    const response = await createUser(userInput);

    return response;
  }
);

export const resetPasswordWithEmailAction = createAsyncThunk(
  "auth/resetPasswordWithEmailAction",
  async (email) => {
    const response = await resetPasswordByEmail(email);

    return response;
  }
);

export const signInUsingEmailAndPasswordAction = createAsyncThunk(
  "auth/signInUsingEmailAndPassword",
  async (userInput) => {
    const response = await signInUsingEmailAndPassword(userInput);

    return response;
  }
);

export const signInUsingAdminAction = createAsyncThunk(
  "auth/signInUsingAdmin",
  async (userInput) => {
    const response = await signInUsingAdmin(userInput);

    return response;
  }
);

export const signOutUserAction = createAsyncThunk(
  "auth/signOutUser",
  async () => {
    const response = await signOutUser();

    return response;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuthDispatchCounter: (state) => {
      state.dispatchCounter = 0;
      state.isSuccess = false;
      state.message = "";
    },
    updateUserToRegistered: (state) => {
      state.auth.registered = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUserAction.pending, (state) => {
      state.isRegistrationLoading = true;
    });
    builder.addCase(createUserAction.fulfilled, (state, action) => {
      state.auth = action.payload.auth;
      state.isRegistrationLoading = false;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
      state.dispatchCounter = 1;
    });
    builder.addCase(createUserAction.rejected, (state, action) => {
      state.auth = null;
      state.isRegistrationLoading = false;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
      state.dispatchCounter = 1;
    });
    builder.addCase(resetPasswordWithEmailAction.pending, (state) => {
      state.isResetLoading = true;
    });
    builder.addCase(resetPasswordWithEmailAction.fulfilled, (state, action) => {
      state.isResetLoading = false;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
      state.dispatchCounter = 1;
    });
    builder.addCase(resetPasswordWithEmailAction.rejected, (state, action) => {
      state.isResetLoading = false;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
      state.dispatchCounter = 1;
    });
    builder.addCase(signInUsingEmailAndPasswordAction.pending, (state) => {
      state.isLoginLoading = true;
    });
    builder.addCase(
      signInUsingEmailAndPasswordAction.fulfilled,
      (state, action) => {
        state.auth = action.payload.auth;
        state.isLoginLoading = false;
        state.isSuccess = action.payload.isSuccess;
        state.message = action.payload.message;
        state.dispatchCounter = 1;
      }
    );
    builder.addCase(
      signInUsingEmailAndPasswordAction.rejected,
      (state, action) => {
        state.auth = null;
        state.isLoginLoading = false;
        state.isSuccess = action.payload.isSuccess;
        state.message = action.payload.message;
        state.dispatchCounter = 1;
      }
    );
    builder.addCase(signInUsingAdminAction.pending, (state) => {
      state.isLoginLoading = true;
    });
    builder.addCase(signInUsingAdminAction.fulfilled, (state, action) => {
      state.auth = action.payload.auth;
      state.isLoginLoading = false;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
      state.dispatchCounter = 1;
    });
    builder.addCase(signInUsingAdminAction.rejected, (state, action) => {
      state.auth = null;
      state.isLoginLoading = false;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
      state.dispatchCounter = 1;
    });
    builder.addCase(signOutUserAction.pending, (state) => {
      state.isLogoutLoading = true;
    });
    builder.addCase(signOutUserAction.fulfilled, (state, action) => {
      state.auth = action.payload.auth;
      state.isLogoutLoading = false;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
      state.dispatchCounter = 1;
    });
    builder.addCase(signOutUserAction.rejected, (state, action) => {
      state.isLogoutLoading = false;
      state.isSuccess = action.payload.isSuccess;
      state.message = action.payload.message;
      state.dispatchCounter = 1;
    });
  },
});

export const { resetAuthDispatchCounter, updateUserToRegistered } =
  authSlice.actions;

export default authSlice.reducer;
