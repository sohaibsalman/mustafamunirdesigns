import React from 'react';

const VideSection = ({ source }) => {
    return (
        <React.Fragment>
            <div className="home-bg-video-container">
                <video autoPlay loop muted className="home-bg-video">
                    <source src={source} />
                </video>
                <div className="home-bg-video-overlay" />
                <div className="home-bg-video-heading">
                    <h1>Mustafa Munir Designs</h1>
                </div>
            </div>
        </React.Fragment>
    );
};

export default VideSection;
