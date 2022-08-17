import { createSlice } from "@reduxjs/toolkit";

const imagesSlice = createSlice({
    name: "images",
    initialState: {
        images: [],
        popupImage: null,
        imagesAreLoading: true,
        popupImageIsLoading: true
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
        resetImages(state) {
            state.images = [];
            state.imagesAreLoading = true;
        },
        resetPopupImage(state) {
            state.popupImage = null;
        },
        resetLoadingState(state, action) {
            if (action.payload === "STORIES_LOADING_FAIL") {
                state.storiesAreLoading = false;
            }
            if (action.payload === "ARTICLE_LOADING_FAIL") {
                state.articleIsLoading = false;
            }
        }
    }
});

export const imagesActions = imagesSlice.actions;

export default imagesSlice;
