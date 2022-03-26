import React from 'react';
import { useNavigate } from 'react-router-dom';

import './strip-button.css';

const StripButton = ({ text, route, textPosition = 'left' }) => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate(route);
    };

    return (
        <React.Fragment>
            <div className="strip-button-container">
                <div className={`strip-button text--${textPosition}`}>
                    <div
                        className="strip-button-text"
                        onClick={handleButtonClick}
                    >
                        {text}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default StripButton;
