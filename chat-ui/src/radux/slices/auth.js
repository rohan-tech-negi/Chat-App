import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  token: "",
  isLoading: false,
  user: null,
  user_id: null,
  email: "",
  error: false,
};