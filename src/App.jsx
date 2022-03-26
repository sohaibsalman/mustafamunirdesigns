import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Artworks from './pages/Artworks/Artworks';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import KhakaGhar from './pages/KhakaGhar/KhakaGhar';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

const App = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="artworks" element={<Artworks />} />
                <Route path="khaka-ghar" element={<KhakaGhar />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
            <Footer />
        </React.Fragment>
    );
};

export default App;
