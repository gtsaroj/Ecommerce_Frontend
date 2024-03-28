import Cookies from "js-cookie";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { makeRequest } from "../makeRequest";

export const LoginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await makeRequest.post("/auth/local", {
        identifier: email,
        password,
      });

      const responseData = await response.data;

      // Cookies.set("refreshToken", responseData.refreshToken, {
      //   expires: 7,
      //   secure: true,
      // });
      Cookies.set("accessToken", responseData.jwt, {
        expires: 7,
        secure: true,
      });
      return responseData.user;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error);
      }
    }
  }
);
