import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/searchSlice";
import childReducer from "./features/childSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { api } from "./api/apiSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: [api.reducerPath],
};

const reducer = combineReducers({
  search: searchReducer,
  child: childReducer,
  [api.reducerPath]: api.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // Redux persist
      serializableCheck: false,
    }).concat(api.middleware),
});
