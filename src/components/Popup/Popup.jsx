import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Modal from "../Modal/Modal";
import CommentForm from "../CommentForm/CommentForm";
import ErrorNotification from "../ErrorNotification/ErrorNotification";
import Preloader from "../Preloader/Preloader";
import useHttp from "../../hooks/use-http";
import classes from "./Popup.module.css";

const Popup = (props) => {
    const [image, setImage] = useState({});

    const { isLoading, error: imageError, sendRequest: fetchImage } = useHttp();

    useEffect(() => {
        const getLargeImage = (image) => {
            setImage(image);
        };

        fetchImage(
            {
                url: `https://boiling-refuge-66454.herokuapp.com/images/${props.imageId}`
            },
            getLargeImage
        );
    }, [fetchImage, props.imageId]);

    const popupContent = (
        <>
            <img className={classes.image} src={image.url} alt="some staff" />
            <CommentForm id={props.imageId} />
        </>
    );

    return (
        <Modal onClose={props.onClose}>
            {isLoading && <Preloader />}
            {!isLoading && !imageError && popupContent}
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
