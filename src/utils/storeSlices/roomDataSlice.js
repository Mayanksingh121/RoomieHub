import { createSlice } from "@reduxjs/toolkit";

const roomDataSlice = createSlice({
  name: "roomData",
  initialState: {
    availableRooms: [],
    bookmarkRooms: [],
  },
  reducers: {
    addRoomData: (state, action) => {
      state.availableRooms = action.payload;
    },
    addBookmarkRooms: (state, action) => {
      const newBookMark = action.payload;
      state.bookmarkRooms.push(newBookMark);
    },
  },
});

export const { addRoomData, addBookmarkRooms } = roomDataSlice.actions;
export default roomDataSlice.reducer;
