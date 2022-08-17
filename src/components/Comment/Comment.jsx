import React from "react";
import PropTypes from "prop-types";

import classes from "./Comment.module.css";
import dateConverter from "../../helpers/dateConverter";

const Comment = (props) => {
    const date = dateConverter(props.date);

    return (
        <article>
            <span className={classes.date}>
                posted on <time dateTime={date}>{date}</time>
            </span>
            <h3 className={classes.comment}>{props.text}</h3>
        </article>
    );
};

Comment.propTypes = {
    text: PropTypes.string,
    date: PropTypes.number
};

export default Comment;
