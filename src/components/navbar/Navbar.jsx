import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import {
    navbarImageProperties,
    navbarLinks,
} from '../../services/navbar.service';

const Navbar = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark navbar-bg-primary">
                <Link className="navbar-brand" to={'/'}>
                    <img
                        src={navbarImageProperties.src}
                        width={navbarImageProperties.width}
                        height={navbarImageProperties.height}
                        alt={navbarImageProperties.alt}
                    />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav ms-auto">
                        {/* Iterate the navbar links coming from navbar services and add the links to navbar */}
                        {navbarLinks.map((link, index) => (
                            <NavLink
                                key={index}
                                className="nav-item nav-link nav--link"
                                to={link.route}
                            >
                                {link.title}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
};

export default Navbar;
