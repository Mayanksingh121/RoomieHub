import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    watchList: [],
  },

  reducers: {
    setIsLoggedIn: (state,action) => {
      state.isLoggedIn = action.payload;
    },
    setWatchList: (state, action) => {
      state.watchList = action.payload;
    },
  },
});

export const { setIsLoggedIn, setWatchList } = userSlice.actions;
export default userSlice.reducer;
