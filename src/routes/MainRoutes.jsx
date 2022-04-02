import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Artworks from '../pages/Artworks/Artworks';
import Contact from '../pages/Contact/Contact';
import Home from '../pages/Home/Home';
import KhakaGhar from '../pages/KhakaGhar/KhakaGhar';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="artworks" element={<Artworks />} />
            <Route path="khaka-ghar" element={<KhakaGhar />} />
            <Route path="contact" element={<Contact />} />
        </Routes>
    );
};

export default MainRoutes;
