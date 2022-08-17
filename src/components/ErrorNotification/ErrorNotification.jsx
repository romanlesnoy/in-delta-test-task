import React from "react";
import PropTypes from "prop-types";

import styles from "./ErrorNotification.module.css";

const ErrorNotification = ({ error }) => {
    const { message } = error;
    return (
        <section className={styles.notification}>
            <p>{message}</p>
        </section>
    );
};

ErrorNotification.propTypes = {
    error: PropTypes.object
};

export default ErrorNotification;
