import { createSlice } from "@reduxjs/toolkit";

export const childSlice = createSlice({
  name: "child",
  initialState: {
    currentChild: null,
  },
  reducers: {
    setCurrentChild: (state, action) => {
      state.currentChild = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentChild } = childSlice.actions;

export const selectCurrentChild = (state: any) => state.child.currentChild;

export default childSlice.reducer;
