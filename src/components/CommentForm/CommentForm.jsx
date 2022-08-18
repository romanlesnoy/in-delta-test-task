import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

import { postComment } from "../../store/images-actions";
import classes from "./CommentForm.module.css";
import useInput from "../../hooks/use-input";
import { errorActions } from "../../store/error-slice";

const isEmpty = (value) => value.trim() !== "";

const CommentForm = (props) => {
    const dispatch = useDispatch();
    const userName = useSelector((state) => state.user.userName);
    const isLoading = useSelector((state) => state.images.commentIsSending);
    const notification = useSelector(
        (state) => state.error.commentNotification
    );

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const resetNotification = () => {
        if (notification) {
            dispatch(errorActions.resetCommentNotification());
        }
    };

    const {
        value: enteredComment,
        isValid: enteredCommentIsValid,
        hasError: commentInputHasError,
        valueChangeHandler: commentChangeHandler,
        inputBlurHandler: commentBlurHandler,
        reset: resetCommentInput
    } = useInput(isEmpty);

    const saveHandler = (event) => {
        event.preventDefault();

        if (!enteredCommentIsValid) {
            return;
        }

        const date = new Date();

        dispatch(
            postComment({
                id: date.getTime(),
                comment: enteredComment,
                name: userName,
                date: date.getTime(),
                imageId: props.id
            })
        );

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
                    onFocus={resetNotification}
                    ref={inputRef}
                ></textarea>

                {!commentInputHasError && !notification && (
                    <span className={classes.span}>
                        Write a few sentences about the photo.
                    </span>
                )}

                {notification && !commentInputHasError && (
                    <span className={classes.span}>{notification}</span>
                )}

                {commentInputHasError && !notification && (
                    <span className={classes.error}>
                        Leave a comment. The form must not be empty.
                    </span>
                )}

                <button
                    className={classes.button}
                    type="submit"
                    disabled={!enteredCommentIsValid}
                >
                    {isLoading ? "Sending" : "Save"}
                </button>
            </form>
        </React.Fragment>
    );
};

CommentForm.propTypes = {
    id: PropTypes.number.isRequired
};

export default CommentForm;
