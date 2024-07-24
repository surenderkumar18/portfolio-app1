// store/index.js

import { configureStore } from "@reduxjs/toolkit";
import positionsReducer from "./positionsSlice";

export const store = configureStore({
  reducer: {
    positions: positionsReducer,
    // Add other reducers here if needed
  },
});

export default store;
