import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import classes from "./CardList.module.css";
import ImageCard from "../ImageCard/ImageCard";
import ErrorNotification from "../ErrorNotification/ErrorNotification";
import useHttp from "../../hooks/use-http.js";

const CardList = (props) => {
    const [images, setImages] = useState([]);

    const { isLoading, error, sendRequest: fetchCards } = useHttp();

    useEffect(() => {
        const getCards = (cards) => {
            setImages(cards);
        };

        fetchCards(
            {
                url: "https://boiling-refuge-66454.herokuapp.com/images"
            },
            getCards
        );
    }, [fetchCards]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <section>
            {error && <ErrorNotification error={error} />}
            {images && !error && (
                <ul className={classes.cardList}>
                    {images.map((image) => {
                        return (
                            <ImageCard
                                key={image.id}
                                {...image}
                                onClick={props.onImageClick}
                            />
                        );
                    })}
                </ul>
            )}
        </section>
    );
};

CardList.propTypes = {
    onImageClick: PropTypes.func.isRequired
};

export default CardList;
