import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../Banner/Banner';
import HomeServices from '../HomeServices/HomeServices';
import Stats from '../Stats/Stats';
import Timeline from '../Timeline/Timeline';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Gamingable</title>
                <meta name="Gamingable" content="Website" ></meta>
            </Helmet>
            <Banner></Banner>
            <HomeServices></HomeServices>
            <Stats></Stats>
            <Timeline></Timeline>
        </div>
    );
};

export default Home;