import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "../slice";

const store = configureStore({
  reducer: {
    searchValue: searchSlice,
  },
});

export { store };
