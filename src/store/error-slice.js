import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
    name: "error",
    initialState: { notification: null, commentNotification: null },
    reducers: {
        showError(state, action) {
            state.notification = {
                message: action.payload.message
            };
        },
        setCommentNotification(state, action) {
            state.commentNotification = action.payload;
        },
        resetNotification(state) {
            state.notification = null;
        },
        resetCommentNotification(state) {
            state.commentNotification = null;
        }
    }
});

export const errorActions = errorSlice.actions;

export default errorSlice;
