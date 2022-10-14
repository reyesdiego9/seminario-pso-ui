import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { urlApi } from '../../Helpers/urlApi';

interface suppliesInterface {
  data: Array<any>;
  dataSelected: Array<any>;
  loading: boolean;
  error: string | null;
}

const initialState: suppliesInterface = {
  data: [],
  dataSelected: [],
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
    return response?.body;
  }
);

export const suppliesSlice = createSlice({
  name: 'supplies',
  initialState: initialState,
  reducers: {
    getDataById: (state, payload) => {
      state.dataSelected = state.data.find(
        (d) => d.idSuministro === payload.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllSupplies.pending, (state, action) => {
      state.loading = true;
      state.data = [];
    });
    builder.addCase(getAllSupplies.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getAllSupplies.rejected, (state, action) => {
      state.loading = false;
      state.error = 'error';
    });
  },
});

export const { getDataById } = suppliesSlice.actions;
export default suppliesSlice.reducer;
