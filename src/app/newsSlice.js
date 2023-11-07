import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newsData: [],
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
  },
});

export const { replace, append } = counterSlice.actions;

export default counterSlice.reducer;
