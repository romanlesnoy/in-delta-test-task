import React from "react";

import classes from "./CardList.module.css";
import Card from "../Card/Card";

const CardList = () => {
    return (
        <ul className={classes.cardList}>
            <Card />
        </ul>
    );
};

export default CardList;
