import React from 'react';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import MainRoutes from './routes/MainRoutes';

const App = () => {
    return (
        <React.Fragment>
            <Navbar />
            <MainRoutes />
            <Footer />
        </React.Fragment>
    );
};

export default App;
