import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/searchSlice";
import childReducer from "./features/childSlice";

export default configureStore({
  reducer: {
    search: searchReducer,
    child: childReducer
  },
});
