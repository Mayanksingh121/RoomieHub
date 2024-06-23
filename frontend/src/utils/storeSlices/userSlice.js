import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    userDetails: null,
    search: null,
  },

  reducers: {
    setIsLoggedIn: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
    setUserSearch: (state,action) =>{
      state.search = action.payload;
    }
  },
});

export const {setIsLoggedIn, setUserSearch} = userSlice.actions;
export default userSlice.reducer;
