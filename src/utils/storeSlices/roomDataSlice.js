import { createSlice } from "@reduxjs/toolkit";

const roomDataSlice = createSlice({
  name: "roomData",
  initialState: {
    availableRooms: [],
  },
  reducers: {
    addRoomData: (state, action) => {
      state.availableRooms = action.payload;
    },
  },
});

export const { addRoomData} = roomDataSlice.actions;
export default roomDataSlice.reducer;
