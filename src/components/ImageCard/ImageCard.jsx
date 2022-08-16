import React from "react";
import PropTypes from "prop-types";

import classes from "./ImageCard.module.css";

const ImageCard = (props) => {
    function handleClick() {
        props.onClick(props.id);
    }
    return (
        <li
            className={classes.card}
            onClick={handleClick}
            onKeyPress={handleClick}
            role="presentation"
        >
            <article>
                <img
                    className={classes.image}
                    src={props.url}
                    alt="some random staff"
                />
                <p className={classes.text}>id: {props.id}</p>
            </article>
        </li>
    );
};

ImageCard.propTypes = {
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default ImageCard;
