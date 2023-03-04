import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/searchSlice";
import childReducer from "./features/childSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  search: searchReducer,
  child: childReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export default configureStore({
  reducer: persistedReducer,
});
