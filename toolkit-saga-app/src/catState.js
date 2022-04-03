import { createSlice } from "@reduxjs/toolkit";

export const catSlice = createSlice({
  name: "cats", // slice name
  initialState: {
    cats: [],
    isLoading: false,
  },
  reducers: {
    getCatsFetch: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isLoading = true;
    },
    getCatsSuccess: (state, action) => {
      state.cats = action.payload;
      state.isLoading = false;
    },
    getCatsFailure: (state) => {
      state.isLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getCatsFetch, getCatsSuccess, getCatsFailure } = catSlice.actions;

export default catSlice.reducer;
