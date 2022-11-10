import React from 'react';
import Banner from '../Banner/Banner';
import HomeServices from '../HomeServices/HomeServices';
import Stats from '../Stats/Stats';
import Timeline from '../Timeline/Timeline';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeServices></HomeServices>
            <Stats></Stats>
            <Timeline></Timeline>
        </div>
    );
};

export default Home;