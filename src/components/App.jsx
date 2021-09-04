import React from "react";

import Navbar from "./navbar/Navbar";
import Home from "./pages/home/Home";

const App = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Home />
        </React.Fragment>
    );
};

export default App;
