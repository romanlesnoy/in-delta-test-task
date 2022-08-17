import React from "react";
import PropTypes from "prop-types";

import classes from "./CommentForm.module.css";
import useHttp from "../../hooks/use-http";
import useInput from "../../hooks/use-input";

const isEmpty = (value) => value.trim() !== "";

const CommentForm = (props) => {
    const {
        value: enteredComment,
        isValid: enteredCommentIsValid,
        hasError: commentInputHasError,
        valueChangeHandler: commentChangeHandler,
        inputBlurHandler: commentBlurHandler,
        reset: resetCommentInput
    } = useInput(isEmpty);

    const {
        isLoading,
        error: commentError,
        sendRequest: sendCommentRequest
    } = useHttp();

    const addComment = (comment) => {
        console.log(comment);
    };

    const submitCommentHandler = async ({ comment }) => {
        sendCommentRequest(
            {
                url: `https://boiling-refuge-66454.herokuapp.com/images/${props.id}/comments`,
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: {
                    name: "The username must be taken from the context",
                    comment: comment
                }
            },
            addComment
        );
    };

    const saveHandler = (event) => {
        event.preventDefault();

        if (!enteredCommentIsValid) {
            return;
        }

        submitCommentHandler({
            comment: enteredComment
        });

        resetCommentInput();
    };

    return (
        <React.Fragment>
            <form className={classes.form} onSubmit={saveHandler}>
                <label className={classes.label} htmlFor="Comment">
                    Leave Comment
                </label>
                <textarea
                    className={classes.textarea}
                    name="Comment"
                    id="Comment"
                    cols="30"
                    rows="10"
                    type="text"
                    value={enteredComment}
                    onChange={commentChangeHandler}
                    onBlur={commentBlurHandler}
                ></textarea>

                {!commentInputHasError && !commentError && (
                    <span className={classes.span}>
                        Write a few sentences about the photo.
                    </span>
                )}

                {!commentInputHasError && commentError && (
                    <span className={classes.span}>
                        {commentError}. Try again later.
                    </span>
                )}

                {commentInputHasError && (
                    <span className={classes.error}>
                        Leave a comment. The form must not be empty.
                    </span>
                )}

                <button
                    className={classes.button}
                    type="submit"
                    disabled={!enteredCommentIsValid}
                >
                    {isLoading ? "Send" : "Save"}
                </button>
            </form>
        </React.Fragment>
    );
};

CommentForm.propTypes = {
    id: PropTypes.number.isRequired
};

export default CommentForm;
