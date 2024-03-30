import { createAsyncThunk } from "@reduxjs/toolkit";
import { makeRequest } from "../makeRequest";
import Cookies from "js-cookie";
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";

export const getAccessAndRefreshToken = async (email, password) => {
  const responseData = await makeRequest.post("/auth/local", {
    identifier: email,
    password,
  });
  const data = await responseData.data;


  Cookies.set("accessToken", data.jwt, {
    expires: 7,
    secure: true,
  });
};


export const registerNewUser = createAsyncThunk(
  "auth/register",
  async (RegisterValue, { rejectWithValue }) => {
    try {
      const { firstName, lastName, email, password, avatar, phoneNumber } =
        RegisterValue;
      console.log(avatar)
      const response = await makeRequest.post("/auth/local/register", {
        username: `${firstName} ${lastName}`,
        phoneNumber,
        email,
        password,
        avatar,
      });
      const responseData = await response.data;
      await getAccessAndRefreshToken(email, password);
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
