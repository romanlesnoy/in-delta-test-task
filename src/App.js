import React, { useState, Suspense } from "react";

import Preloader from "./components/Preloader/Preloader";
import CardList from "./components/CardList/CardList";
import Banner from "./components/Banner/Banner";
import Profile from "./components/Profile/Profile";

const Popup = React.lazy(() => import("./components/Popup/Popup"));

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
        <>
            <Suspense fallback={<Preloader />}>
                {popupIsShown && (
                    <Popup
                        onClose={hidePopupHandler}
                        imageId={selectedImageId}
                    />
                )}
                <Banner />
                <Profile />
                <main>
                    <CardList onImageClick={handleImage} />
                </main>
            </Suspense>
        </>
    );
}

export default App;
