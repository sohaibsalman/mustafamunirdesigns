import { React, useState } from "react";

import "./navbar.css";

const Navbar = () => {
    const [navbarLinks] = useState(NAVBAR_LINKS);
    const [isOpen, setIsOpen] = useState(false);

    const handleNavbarToggle = () => {
        const bars = document.getElementsByClassName("bar");
        if (!isOpen) {
            bars[0].classList.add("bar-rotate-primary");
            bars[1].classList.add("bar-rotate-secondary");

            let timer = 0;
            sliders.forEach((slide) => {
                setTimeout(() => {
                    document.getElementById(slide).style.left = 0;
                }, timer);
                timer += 350;
            });

            setTimeout(() => {
                document.getElementById("navbar-links-container").style.left = 0;
            }, timer);
        } else {
            bars[0].classList.remove("bar-rotate-primary");
            bars[1].classList.remove("bar-rotate-secondary");
            document.getElementById("navbar-links-container").style.left = "100%";
            let timer = 350;
            for (let i = sliders.length; i > 0; i--) {
                setTimeout(() => {
                    document.getElementById(sliders[i - 1]).style.left = "100%";
                }, timer);
                timer += 350;
            }
        }
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">
                    <a href="#">
                        <img src="./assets/logo.svg" alt="Mustafa-Munir" />
                    </a>
                </div>
                <div className="navbar-toggler" id="navbar-toggle" onClick={handleNavbarToggle}>
                    <div className="hamburger">
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </div>
            </div>
            {sliders.map((slide) => {
                return <div id={slide} key={slide} className="navbar-slide" />;
            })}
            <div id="navbar-links-container" className="navbar-slide">
                <ul className="navbar-links">
                    {navbarLinks.map((link, index) => (
                        <li key={index} className="nav-link">
                            <a href={link.url}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

const sliders = ["navbar-slide-1", "navbar-slide-2"];

const NAVBAR_LINKS = [
    {
        title: "Home",
        url: "/",
    },
    {
        title: "Artworks",
        url: "/artworks",
    },
    {
        title: "Projects",
        url: "/projects",
    },
    {
        title: "Contact",
        url: "/contact",
    },
];
