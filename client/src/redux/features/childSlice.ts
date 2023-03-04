import { createSlice } from "@reduxjs/toolkit";

export const childSlice = createSlice({
  name: "child",
  initialState: {
    child: {},
  },
  reducers: {
    setCurrentChild: (state, action) => {
      state.child = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentChild } = childSlice.actions;

export const selectCurrentChild = (state: any) => state.child.child;

export default childSlice.reducer;
