import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth-slicer";

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
