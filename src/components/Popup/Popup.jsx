import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { fetchLargeImage } from "../../store/images-actions";

import Modal from "../Modal/Modal";
import CommentForm from "../CommentForm/CommentForm";
import ErrorNotification from "../ErrorNotification/ErrorNotification";
import Preloader from "../Preloader/Preloader";
import CommentList from "../CommentList/CommentList";
import classes from "./Popup.module.css";

const Popup = (props) => {
    const dispatch = useDispatch();
    const popupImage = useSelector((state) => state.images.popupImage);

    useEffect(() => {
        dispatch(fetchLargeImage(props.imageId));
    }, [dispatch, props.imageId]);

    const isLoading = useSelector((state) => state.images.popupImageIsLoading);
    const imageError = useSelector((state) => state.error.notification);

    return (
        <Modal onClose={props.onClose}>
            {isLoading && <Preloader />}
            {!isLoading && popupImage && (
                <>
                    <img
                        className={classes.image}
                        src={popupImage.url}
                        alt="some staff"
                    />
                    <CommentList comments={popupImage.comments} />
                    <CommentForm id={props.imageId} />
                </>
            )}
            {!isLoading && imageError && (
                <ErrorNotification error={imageError} />
            )}
        </Modal>
    );
};

Popup.propTypes = {
    imageId: PropTypes.number.isRequired,
    onClose: PropTypes.func.isRequired
};

export default Popup;
