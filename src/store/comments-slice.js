import { createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
    name: "image",
    initialState: {
        comments: [],
        imagesAreLoading: true
    },
    reducers: {
        setComments(state, action) {
            state.largeImages = [...state.comments, action.payload];
        },
        resetComments(state) {
            state.comments = [];
        }
    }
});

export const commentsActions = commentsSlice.actions;

export default commentsSlice;
