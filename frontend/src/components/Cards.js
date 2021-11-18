import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards(props) {
    return (
        <div className='cards'>
            <h1>My Services</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        {props.cards.map(card => (
                            <CardItem
                                src={card['src']}
                                text={card['text']}
                                label={card['label']}
                                path={card['path']}
                                alt={card['alt']}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;