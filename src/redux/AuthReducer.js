import { createSlice } from "@reduxjs/toolkit";
import { registerNewUser } from "./RegisterAction";
import { LoginUser } from "./LoginAction";

// const userToken = localStorage.getItem("userToken");
const initialState = {
  error: null || [],
  loading: true || false,
  success: false,
  userInfo: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authLogout: (state) => {
      state.loading = false;
      state.success = false;
      state.userInfo = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerNewUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerNewUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.userInfo = action.payload;
      })
      .addCase(registerNewUser.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })
      .addCase(LoginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.userInfo = action.payload;
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;

export const { authLogout } = authSlice.actions;
