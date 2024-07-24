// store/positionsSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  positions: [],
};

const positionsSlice = createSlice({
  name: "positions",
  initialState,
  reducers: {
    addPosition(state, action) {
      state.positions.push(action.payload);
    },
    editPosition(state, action) {
      const { id, updatedPosition } = action.payload;
      const existingPosition = state.positions.find((pos) => pos.id === id);
      if (existingPosition) {
        Object.assign(existingPosition, updatedPosition);
      }
    },
    deletePosition(state, action) {
      const { id } = action.payload;
      state.positions = state.positions.filter((pos) => pos.id !== id);
    },
  },
});

export const { addPosition, editPosition, deletePosition } =
  positionsSlice.actions;

export default positionsSlice.reducer;
