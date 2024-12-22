import { ICurrentUser } from "@/services/interfaces/user-interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: ICurrentUser | null; // Replace 'any' with your user type
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<ICurrentUser>) {
      // Replace 'any' with your user type
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout(state) {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
