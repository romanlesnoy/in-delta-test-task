import { configureStore } from "@reduxjs/toolkit";
import imagesSlice from "./images-slice";
import userSlice from "./user-slice";
import commentsSlice from "./comments-slice";
import errorSlice from "./error-slice";

const store = configureStore({
    reducer: {
        images: imagesSlice.reducer,
        user: userSlice.reducer,
        comments: commentsSlice.reducer,
        error: errorSlice.reducer
    }
});

export default store;
