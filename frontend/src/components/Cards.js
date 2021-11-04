import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>My Services</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='/images/img-2.jpg'
                            text='Single Page Website'
                            label='React'
                            path='/services/redesign'
                        />
                        <CardItem
                            src='/images/img-1.jpg'
                            text='Multi Page Website'
                            label='React | Wordpress | Drupal'
                            path='/services/design'
                        />
                        <CardItem
                            src='/images/img-2.jpg'
                            text='Full Stack Web Application'
                            label='React, Node.js, GraphQL'
                            path='/services/develop'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;