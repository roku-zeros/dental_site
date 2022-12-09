import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Menu from "./components/Menu/Menu";

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <Router>
            <Menu/>
        </Router>
    );
}

export default App;
