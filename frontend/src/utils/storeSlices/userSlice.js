import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    watchList:false
  },

  reducers: {
    setIsLoggedIn: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
    setWatchList: (state, action) => {
      state.watchList = action.payload;
    },
  },
});

export const { setIsLoggedIn, setWatchList } = userSlice.actions;
export default userSlice.reducer;
