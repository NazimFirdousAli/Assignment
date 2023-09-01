import { createSlice } from "@reduxjs/toolkit";

// utils

const initialState = {
  search: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchValue(state, action) {
      state.search = action.payload;
    },
    clearSearch(state) {
      state.search = "";
    },
  },
});
// Reducer
export default searchSlice.reducer;

// Actions
export function setSearchValue(value) {
  return async (dispatch) => {
    dispatch(searchSlice.actions.searchValue(value));
  };
}

export function clearSearchState() {
  return async (dispatch) => {
    dispatch(searchSlice.actions.clearSearch());
  };
}

// ----------------------------------------------------------------------
