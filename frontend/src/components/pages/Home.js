import React from 'react';
import '../../App.css';
import Cards from '../Cards.js';
import Hero from '../Hero.js';
import Footer from '../Footer.js';

function Home() {
    return (
        <>
            <Hero/>
            <Cards/>
            <Footer/>
        </>
    );
}

export default Home;