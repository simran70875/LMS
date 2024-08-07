import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") || false,
  token: localStorage.getItem("token") || null,
  role: localStorage.getItem("role") || null,
  userid: localStorage.getItem("userid") || null,
};

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.role = action.payload.role;
      state.userid = action.payload.userid;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.token = null;
      state.role = null;
      state.userid = null;
    },
  },
});
export const { loginSuccess, logout } = authReducer.actions;
export default authReducer.reducer;
