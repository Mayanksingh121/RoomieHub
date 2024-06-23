import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "./storeSlices/roomDataSlice";
import userReducer from "./storeSlices/userSlice";

const appStore = configureStore({
  reducer: {
    room: roomReducer,
    user: userReducer,
  },
});

export default appStore;
