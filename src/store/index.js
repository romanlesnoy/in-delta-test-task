import { configureStore } from "@reduxjs/toolkit";
import imagesSlice from "./images-slice";
import userSlice from "./user-slice";
import errorSlice from "./error-slice";

const store = configureStore({
    reducer: {
        images: imagesSlice.reducer,
        user: userSlice.reducer,
        error: errorSlice.reducer
    }
});

export default store;
