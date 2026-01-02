import { createSlice } from "@reduxjs/toolkit";
import { clearToken } from "../lib/auth";

const initialState = {
  user: null,
  organizer: null,
  role: null,        // "user" | "organizer"
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      const { data, role } = action.payload;

      state.role = role;
      state.isLoggedIn = true;

      if (role === "user") {
        state.user = data;
        state.organizer = null;
      }

      if (role === "organizer") {
        state.organizer = data;
        state.user = null;
      }
    },

    logout: (state) => {
      clearToken();
      state.user = null;
      state.organizer = null;
      state.role = null;
      state.isLoggedIn = false;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
