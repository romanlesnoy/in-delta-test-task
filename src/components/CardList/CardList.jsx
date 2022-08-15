import React, { useState, useEffect } from "react";

import classes from "./CardList.module.css";
import ImageCard from "../ImageCard/ImageCard";

import useHttp from "../../hooks/use-http.js";

const CardList = () => {
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

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <ul className={classes.cardList}>
            {images &&
                images.map((image) => {
                    return <ImageCard key={image.id} url={image.url} />;
                })}
        </ul>
    );
};

export default CardList;
