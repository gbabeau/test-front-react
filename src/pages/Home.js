import React from 'react';
import Countries from '../components/Countries';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div>
            {/* les images importee depuis la balise IMG sont acce dans "public" */}
            <Logo />
            <Navigation />
            <h1>bonjour</h1>
            <Countries />
        </div>
    );
};

export default Home;