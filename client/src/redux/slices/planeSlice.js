import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import planesService from '../services/planesService';

export const getPlane = createAsyncThunk('getPlane', async (id, thunkAPI) => {
  try {
    return await planesService.getPlane(id);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const createPlane = createAsyncThunk('createPlane', async (planeData, thunkAPI) => {
  try {
    return await planesService.createPlane(planeData);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const planeSlice = createSlice({
  name: 'plane',
  initialState: {
    plane: null,
    isError: false,
    isLoading: false,
    message: '',
    errors: null,
  },
  reducers: {
    resetPlaneErrors: (state) => {
      state.errors = null;
    },
  },
  extraReducers: {
    [getPlane.pending]: (state) => {
      state.isLoading = true;
    },
    [getPlane.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.plane = action.payload[0];
    },
    [getPlane.rejected]: (state, action) => {
      state.isError = true;
      state.isLoading = false;
      state.message = action.payload.message;
      state.plane = null;
    },
    [createPlane.pending]: (state) => {
      state.isLoading = true;
      state.errors = null;
    },
    [createPlane.fulfilled]: (state) => {
      state.isLoading = false;
      state.errors = null;
    },
    [createPlane.rejected]: (state, action) => {
      state.isError = true;
      state.isLoading = false;
      state.errors = action.payload;
    },
  },
});

export const { resetPlaneErrors } = planeSlice.actions;
export default planeSlice.reducer;
