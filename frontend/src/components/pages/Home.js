import React from 'react';
import '../../App.css';
import Cards from '../Cards.js';
import Tiles from '../Tiles.js';
import Hero from '../Hero.js';
import Container from '../Container.js';
import Panel from '../Panel.js';
import Footer from '../Footer.js';

function Home() {
    const cards = [{
        src: '/images/img-4.jpg',
        text: 'Single Page Website',
        label: 'React',
        path: '/services/single-page-app',
        alt: 'Screenshot of react application'
    }, {
        src: '/images/img-5.jpg',
        text: 'Multi Page Website',
        label: 'React | Wordpress | Drupal',
        path: '/services/multi-page-app',
        alt: 'Screenshot of wordpress website'

    }, {
        src: '/images/img-6.jpg',
        text: 'Full Stack Web Application',
        label: 'React, Node.js, GraphQL',
        path: '/services/full-stack-app',
        alt: 'Screenshot of full stack express application'
    }];

    const tiles = [{
        src: '/images/img-9.jpg',
        text: 'How to Use React Hooks',
        label: 'React',
        path: '/services/single-page-app',
        alt: 'Screenshot of react application'
    }, {
        src: '/images/img-8.jpg',
        text: 'Making a React App with Express Back End',
        label: 'React | Node.js ',
        path: '/services/multi-page-app',
        alt: 'Screenshot of wordpress website'

    }, {
        src: '/images/img-7.jpg',
        text: 'Create a Custom Wordpress Theme',
        label: 'Wordpress',
        path: '/services/full-stack-app',
        alt: 'Screenshot of full stack express application'
    }];


    return (
        <>
            <Hero/>
            <Container>
                <Panel
                    background='/images/img-3.jpg'
                    title='Explore'
                    description='Dozens of stunning websites in my portfolio.'
                    button='LEARN MORE'
                    style='divided'
                />
                <Cards cards={cards} />
                <Panel
                    background='/images/img-10.jpg'
                    title='Discover'
                    description='Read stories about the tech landscape and learn how to become a developer.'
                    button='LEARN MORE'
                    style='cards'
                >
                    <Tiles tiles={tiles} />
                </Panel>
            </Container>
            <Footer/>
        </>
    );
}

export default Home;