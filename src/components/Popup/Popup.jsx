import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Modal from "../Modal/Modal";
import useHttp from "../../hooks/use-http";
import classes from "./Popup.module.css";

const Popup = (props) => {
    const [image, setImage] = useState({});

    const { isLoading, error, sendRequest: fetchImage } = useHttp();
    console.log(isLoading, error);

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

    const loadingContent = <p>Loading ...</p>;

    const popupContent = (
        <>
            <img src={image.url} alt="some staff" className={classes.image} />
            <button onClick={props.onClose}>Close</button>
        </>
    );

    const errorContent = (
        <>
            <p>{error}</p>
            <button onClick={props.onClose}>Close</button>
        </>
    );

    return (
        <Modal onClose={props.onClose}>
            {isLoading && loadingContent}
            {!isLoading && !error && popupContent}
            {!isLoading && error && errorContent}
        </Modal>
    );
};

Popup.propTypes = {
    imageId: PropTypes.number.isRequired,
    onClose: PropTypes.func.isRequired
};

export default Popup;
