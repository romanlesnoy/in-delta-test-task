import React from "react";

import styles from "./Card.module.css";

const NewsCard = () => {
    return (
        <li className={styles.card}>
            <article>
                <p>Some content</p>
            </article>
        </li>
    );
};

export default NewsCard;
