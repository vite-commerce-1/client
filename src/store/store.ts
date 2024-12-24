import { configureStore } from "@reduxjs/toolkit";
import authReducer, { login } from "./slices/auth-slicer";

const storedUser = localStorage.getItem("user");
const initialUser = storedUser ? JSON.parse(storedUser) : null;

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// Dispatch login action jika ada pengguna yang disimpan
if (initialUser) {
  store.dispatch(login(initialUser));
}

export type RootState = ReturnType<typeof store.getState>;
