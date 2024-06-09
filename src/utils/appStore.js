import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "./storeSlices/roomDataSlice";

const appStore = configureStore({
    reducer: {
        room: roomReducer,
    }
});

export default appStore;