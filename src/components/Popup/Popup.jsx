import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Modal from "../Modal/Modal";
import useHttp from "../../hooks/use-http";

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

    return (
        <Modal onClose={props.onClose}>
            <img src={image.url} alt="some staff" />
            <button onClick={props.onClose}>Close</button>
        </Modal>
    );
};

Popup.propTypes = {
    imageId: PropTypes.number.isRequired,
    onClose: PropTypes.func.isRequired
};

export default Popup;
