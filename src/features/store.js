import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import acceleratorSlice from "./accelerator/acceleratorSlice";
import authSlice from "./auth/authSlice";
import coWorkingSpaceSlice from "./co-working-space/coWorkingSpaceSlice";
import fabLabSlice from "./fab-lab/fabLabSlice";
import foodInnovationSlice from "./food-innovation/foodInnovationSlice";
import iHubSlice from "./iHub/iHubSlice";
import startupSlice from "./startup/startupSlice";
import tbiSlice from "./tbi/tbiSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  accelerator: acceleratorSlice,
  coWorkingSpace: coWorkingSpaceSlice,
  fabLab: fabLabSlice,
  food: foodInnovationSlice,
  iHub: iHubSlice,
  auth: authSlice,
  startup: startupSlice,
  tbi: tbiSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const logger = createLogger();

export const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    let middleware = getDefaultMiddleware({
      serializableCheck: false,
    });

    // add concat if building on development
    //  let middleware = getDefaultMiddleware({
    //   serializableCheck: false,
    // }).concat(logger);

    return middleware;
  },
});
export const persistor = persistStore(store);
