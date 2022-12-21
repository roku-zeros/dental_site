import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import Home from './pages/Home/index'
import AboutUs from "./pages/AboutUs";
import ServicesPage from "./pages/Services";
import Footer from "./components/Footer/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


function App() {
    return (
        <Router>
            <MyNavbar />
            <Routes>
                <Route index path='/' element={<Home />} />
            </Routes>
            <Routes>
                <Route path='/about-us' element={<AboutUs />} />
            </Routes>
            <Routes>
                <Route path='/services' element={<ServicesPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
