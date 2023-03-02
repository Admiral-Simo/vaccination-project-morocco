import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./features/searchSlice";

export default configureStore({
  reducer: {
    search: searchSlice,
  },
});
