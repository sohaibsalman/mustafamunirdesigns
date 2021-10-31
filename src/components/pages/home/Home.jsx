import React from "react";
import BgVideo from "../../bg-video/BgVideo";

const Home = () => {
    return (
        <React.Fragment>
            <BgVideo source="./assets/without text.mp4" />
            <AboutSection />
        </React.Fragment>
    );
};

const AboutSection = () => {
    return (
        <div>
            <h1>About</h1>
        </div>
    );
};

export default Home;
