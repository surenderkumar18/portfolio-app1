import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserById = createAsyncThunk(
  "users/fetchByIdStatus",
  async (userId, thunkAPI) => {
    const response = await axios.get(`/fakeApi/user/${userId}`);
    return response.data;
  }
);

// -- 
import { createSlice } from "@reduxjs/toolkit";
import { fetchUserById } from "./userThunks";

const userSlice = createSlice({
  name: "user",
  initialState: {
    entities: {},
    loading: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.pending, (state) => {
        state.loading = "loading";
        state.error = null;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = "idle";
        state.entities[action.payload.id] = action.payload;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = "idle";
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
