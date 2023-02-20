import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const message = createAsyncThunk('greeting/message', async (_, thunk) => {
  try {
    const response = await axios.get('http://localhost:3000/api/v1/greeting');
    console.log(response.data);
    return response.data;
  } catch (error) {
    return thunk.rejectWithValue(error.response.data);
  }
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: '',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(message.fulfilled, (state, action) => action.payload);
    builder.addCase(message.rejected, (state, action) => action.payload);
  },
});

export default greetingSlice.reducer;
