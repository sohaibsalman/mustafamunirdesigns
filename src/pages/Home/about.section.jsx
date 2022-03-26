import React from 'react';

const AboutSection = () => {
    return (
        <React.Fragment>
            <section className="home-about-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="home-about--text">
                                <h2 className="heading-secondary">About</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Dignissimos ipsa voluptate
                                    a fugit nesciunt, in quis eos ex natus
                                    tempora ea facere veritatis praesentium
                                    deserunt suscipit totam. Veritatis,
                                    explicabo minima. Lorem, ipsum dolor sit
                                    amet consectetur adipisicing elit. Debitis
                                    adipisci ratione perferendis, labore facilis
                                    laboriosam! Inventore repellendus ipsam
                                    neque, magni sunt debitis cupiditate laborum
                                    quasi et officia praesentium natus magnam?
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Cum aliquam facilis
                                    debitis illum, explicabo reiciendis eius,
                                    tempore, sint natus quia accusantium velit
                                    eaque quo dolorem laboriosam id obcaecati
                                    asperiores. Officia!
                                </p>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="home-about--image">
                                <img
                                    src="assets/about.jpg"
                                    className="img-fluid"
                                    alt=""
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
