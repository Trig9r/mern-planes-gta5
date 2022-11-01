import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import planesService from '../services/planesService';

export const getPlanes = createAsyncThunk('getPlanes', async (_, thunkAPI) => {
  try {
    return await planesService.getPlanes();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const planesSlice = createSlice({
  name: 'planes',
  initialState: {
    planes: null,
    isError: false,
    isLoading: false,
    message: '',
  },
  extraReducers: {
    [getPlanes.pending]: (state) => {
      state.isLoading = true;
    },
    [getPlanes.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.planes = action.payload;
    },
    [getPlanes.rejected]: (state, action) => {
      state.isError = true;
      state.isLoading = false;
      state.message = action.payload.message;
      state.planes = null;
    },
  },
});

export default planesSlice.reducer;
