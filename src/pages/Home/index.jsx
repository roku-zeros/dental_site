import React from "react";
import Welcome from '../../components/Welcome/Welcome'
import WelcomeServices from '../../components/WelcomeServices/WelcomeServices'
import OurDoctors from "../../components/OurDoctors/OurDoctors";
import Comments from '../../components/Comments/Comments'

const Home = () => {
    return (
        <div>
            <Welcome />
            <WelcomeServices />
            <OurDoctors />
            <Comments />
        </div>
    );
};

export default Home;