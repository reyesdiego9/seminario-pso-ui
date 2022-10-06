import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { urlApi } from '../../Helpers/urlApi';

interface suppliesInterface {
  data: Array<any>;
  loading: boolean;
  error: string | null;
}

const initialState: suppliesInterface = {
  data: [],
  loading: false,
  error: '',
};

export const getAllSupplies = createAsyncThunk(
  'supplies/getSupplies',
  async (_, thunkApi) => {
    const url = urlApi.supplies;
    const response = await axios
      .get(`${url}/all`)
      .then((response) => response.data)
      .catch(console.error);
    console.log('test1');
    console.log(response.body);
    return response?.body;
  }
);

export const suppliesSlice = createSlice({
  name: 'supplies',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllSupplies.pending, (state, action) => {
      state.loading = true;
      state.data = [];
      console.log('pending', state.data);
    });
    builder.addCase(getAllSupplies.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      console.log('fulfilled', state.data);
    });
    builder.addCase(getAllSupplies.rejected, (state, action) => {
      state.loading = false;
      state.error = 'error';
    });
  },
});

export default suppliesSlice.reducer;
