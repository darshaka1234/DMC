import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newsData: [],
  openDrawer: false,
};

export const counterSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    replace: (state, action) => {
      state.newsData = action.payload;
    },
    append: (state, action) => {
      const newArr = [...state.newsData, ...action.payload];
      state.newsData = newArr;
    },
    clickDrawer: (state, action) => {
      state.openDrawer = action.payload;
    },
  },
});

export const { replace, append, clickDrawer } = counterSlice.actions;

export default counterSlice.reducer;
