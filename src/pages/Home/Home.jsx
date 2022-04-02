import React from 'react';
import AboutSection from './about.section';
import OtherPages from './otherpages.section';
import VideSection from './video.section';

const Home = () => {
    return (
        <React.Fragment>
            <VideSection source={'./assets/home-video.mp4'} />
            <AboutSection />
        </React.Fragment>
    );
};

export default Home;
