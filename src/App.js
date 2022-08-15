import React, { useState } from "react";

import Header from "./components/Header/Header";
import CardList from "./components/CardList/CardList";
import Popup from "./components/Popup/Popup";

function App() {
    const [popupIsShown, setPopupIsShown] = useState(false);
    const [selectedImageId, setSelectedImageId] = useState("");

    const handleImage = (id) => {
        setPopupIsShown(true);
        setSelectedImageId(id);
    };

    const hidePopupHandler = () => {
        setPopupIsShown(false);
    };

    return (
        <div className="App">
            {popupIsShown && (
                <Popup onClose={hidePopupHandler} imageId={selectedImageId} />
            )}
            <Header />
            <main>
                <CardList onImageClick={handleImage} />
            </main>
        </div>
    );
}

export default App;
