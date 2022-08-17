import React from "react";
import PropTypes from "prop-types";

import Comment from "../Comment/Comment";
import classes from "./CommentList.module.css";

const CommentList = ({ comments }) => {
    const titleContent =
        comments.length === 0 ? "No comments" : `Comments: ${comments.length}`;

    return (
        <section>
            <h2 className={classes.title}>{titleContent}</h2>
            {comments.length !== 0 && (
                <ul>
                    {comments.map((comment) => {
                        return (
                            <li key={comment.id} className={classes.comment}>
                                <Comment {...comment} />
                            </li>
                        );
                    })}
                </ul>
            )}
        </section>
    );
};

CommentList.propTypes = {
    comments: PropTypes.array
};

export default CommentList;
