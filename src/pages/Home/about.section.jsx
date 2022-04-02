import React from 'react';

import OtherPages from './otherpages.section';

import { about } from '../../services/home.service';

const AboutSection = () => {
    return (
        <React.Fragment>
            <section className="home-about-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="home-about--text">
                                <h2 className="heading-secondary">
                                    {about.heading}
                                </h2>
                                <p>{about.details}</p>
                            </div>
                            <div className="other-pages">
                                <OtherPages />
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="home-about--image">
                                <img
                                    src={about.imageProperties.src}
                                    alt={about.imageProperties.alt}
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default AboutSection;
