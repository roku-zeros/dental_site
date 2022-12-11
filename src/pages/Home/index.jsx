import React from "react";
import Welcome from '../../components/Welcome/Welcome'
import WelcomeServices from '../../components/WelcomeServices/WelcomeServices'

const Home = () => {
    return (
        <div>
            <Welcome />
            <WelcomeServices />
        </div>
    );
};

export default Home;