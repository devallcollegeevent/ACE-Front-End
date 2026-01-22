import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

/**
 * Redux Store
 * Main store configuration combining all application slices.
 */
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
