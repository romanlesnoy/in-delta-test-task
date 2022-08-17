import { createSlice } from "@reduxjs/toolkit";

const imagesSlice = createSlice({
    name: "images",
    initialState: {
        images: [],
        popupImage: null,
        imagesAreLoading: true,
        popupImageIsLoading: true,
        commentIsSending: false
    },
    reducers: {
        setImages(state, action) {
            const imagesData = action.payload;
            state.images = imagesData;
            state.imagesAreLoading = false;
        },
        setPopupImage(state, action) {
            state.popupImage = action.payload;
            state.popupImageIsLoading = false;
        },
        setComments(state, action) {
            state.commentIsSending = true;
            state.popupImage.comments.push(action.payload);
            state.commentIsSending = false;
        },
        resetImages(state) {
            state.images = [];
            state.imagesAreLoading = true;
        },
        resetPopupImage(state) {
            state.popupImage = null;
        },
        resetLoadingState(state, action) {
            if (action.payload === "IMAGES_LOADING_FAIL") {
                state.imagesAreLoading = false;
            }
            if (action.payload === "POPUP_LOADING_FAIL") {
                state.popupImageIsLoading = false;
            }
            if (action.payload === "COMMENT_POST_FAIL") {
                state.popupImageIsLoading = false;
            }
        }
    }
});

export const imagesActions = imagesSlice.actions;

export default imagesSlice;
