import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:3001';

const initialState = {
  user: null,
  token: localStorage.getItem('token'),
  error: null,
  loading: false,
};

export const loginUser = createAsyncThunk(
  'login/loginUser',
  async (user: any, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${url}/login`, {
        email: user.email,
        password: user.password,
      });

      localStorage.setItem('token', token.data);
      return token.data;
    } catch (err: any) {
      console.log(err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default authSlice.reducer;
