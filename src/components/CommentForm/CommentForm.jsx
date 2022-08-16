import React from "react";

import classes from "./CommentForm.module.css";

const CommentForm = () => {
    return (
        <React.Fragment>
            <form className={classes.form}>
                <label className={classes.label} htmlFor="Comment">
                    Comment
                </label>
                <textarea
                    className={classes.textarea}
                    name="Comment"
                    id="Comment"
                    cols="30"
                    rows="10"
                ></textarea>
                <span className={classes.span}>
                    Write a few sentences about the photo.
                </span>
                <button className={classes.button} type="submit">
                    Save
                </button>
            </form>
        </React.Fragment>
    );
};

export default CommentForm;
