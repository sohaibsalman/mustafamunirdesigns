import React from 'react';
import StripButton from '../../components/stripButton/StripButton';

import { otherPages } from '../../services/home.service';

const OtherPages = () => {
    return (
        <React.Fragment>
            <section className="home-other-pages">
                {otherPages.map((page, index) => (
                    <StripButton
                        key={index}
                        text={page.text}
                        route={page.route}
                        textPosition={index % 2 === 0 ? 'left' : 'right'}
                    />
                ))}
            </section>
        </React.Fragment>
    );
};

export default OtherPages;
