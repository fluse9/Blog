import React from 'react';
import '../../App.css';
import Cards from '../Cards.js';
import Hero from '../Hero.js';
import Section from '../Section.js';
import Footer from '../Footer.js';

function Home() {
    const cards = [{
        src: '/images/img-2.jpg',
        text: 'Single Page Website',
        label: 'React',
        path: '/services/single-page-app',
        alt: 'Screenshot of react application'
    }, {
        src: '/images/img-1.jpg',
        text: 'Multi Page Website',
        label: 'React | Wordpress | Drupal',
        path: '/services/multi-page-app',
        alt: 'Screenshot of wordpress website'

    }, {
        src: '/images/img-2.jpg',
        text: 'Full Stack Web Application',
        label: 'React, Node.js, GraphQL',
        path: '/services/full-stack-app',
        alt: 'Screenshot of full stack express application'
    }];

    return (
        <>
            <Hero/>
            <Section/>
            <Cards cards={cards}/>
            <Footer/>
        </>
    );
}

export default Home;