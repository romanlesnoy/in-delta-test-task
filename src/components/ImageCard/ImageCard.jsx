import React from "react";
import PropTypes from "prop-types";

import classes from "./ImageCard.module.css";

const ImageCard = (props) => {
    console.log(props.url);
    return (
        <li className={classes.card}>
            <article>
                <img
                    className={classes.image}
                    src={props.url}
                    alt="some random staff"
                />
            </article>
        </li>
    );
};

ImageCard.propTypes = {
    url: PropTypes.string
};

export default ImageCard;
