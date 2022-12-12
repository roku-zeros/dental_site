import React from "react";
import Welcome from '../../components/Welcome/Welcome'
import WelcomeServices from '../../components/WelcomeServices/WelcomeServices'
import OurDoctors from "../../components/OurDoctors/OurDoctors";

const Home = () => {
    return (
        <div>
            <Welcome />
            <WelcomeServices />
            <OurDoctors />
        </div>
    );
};

export default Home;