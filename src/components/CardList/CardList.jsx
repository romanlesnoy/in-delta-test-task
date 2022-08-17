import { useEffect } from "react";
import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchImages } from "../../store/images-actions";

import classes from "./CardList.module.css";
import ImageCard from "../ImageCard/ImageCard";
import ErrorNotification from "../ErrorNotification/ErrorNotification";
import Preloader from "../Preloader/Preloader";

const CardList = (props) => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.images.imagesAreLoading);
    const images = useSelector((state) => state.images.images);
    const notification = useSelector((state) => state.error.notification);

    useEffect(() => {
        dispatch(fetchImages());
    }, [dispatch]);

    return (
        <section>
            {isLoading && <Preloader />}
            {notification && <ErrorNotification error={notification.title} />}
            {images && (
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
