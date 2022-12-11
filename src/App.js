import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import Home from './pages/Home/index'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


function App() {
    return (
        <Router>
            <MyNavbar />
            <Routes>
                <Route index path='/' element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
