import React from "react";
import PropTypes from "prop-types";

import styles from "./ErrorNotification.module.css";

const ErrorNotification = (props) => {
    return (
        <section className={styles.notification}>
            <h2>{props.error}</h2>
            <p>Try again later</p>
        </section>
    );
};

ErrorNotification.propTypes = {
    error: PropTypes.string
};

export default ErrorNotification;
