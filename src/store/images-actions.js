import { imagesActions } from "./images-slice";
import { errorActions } from "./error-slice";

import { getImages, getLargeImage } from "../api/api";

export const fetchImages = () => {
    return async (dispatch, getState) => {
        try {
            dispatch(imagesActions.resetImages());

            const notification = getState().error.notification;
            if (notification) {
                dispatch(errorActions.resetNotification());
            }

            const images = await getImages();

            dispatch(imagesActions.setImages(images));
        } catch (error) {
            dispatch(imagesActions.resetLoadingState("IMAGES_LOADING_FAIL"));
            dispatch(
                errorActions.showError({
                    message: "Request failed! Try again later."
                })
            );
        }
    };
};

export const fetchLargeImage = (id) => {
    return async (dispatch, getState) => {
        try {
            dispatch(imagesActions.resetPopupImage());

            const notification = getState().error.notification;
            if (notification) {
                dispatch(errorActions.resetNotification());
            }

            const largeImage = await getLargeImage(id);

            dispatch(imagesActions.setPopupImage(largeImage));
        } catch (error) {
            dispatch(imagesActions.resetLoadingState("POPUP_LOADING_FAIL"));
            dispatch(
                errorActions.showError({
                    message: "Request failed! Try again later."
                })
            );
        }
    };
};
