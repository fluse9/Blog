import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';
import $ from 'jquery';

function CardItem(props) {
    $(document).ready(function() {
        $('.cards__item').mouseover(function() {
            $(this).find('.cards__item__img').css('transform', 'scale(1.1)');
        });
        $('.cards').mouseout(function() {
            $(this).find('.cards__item__img').css('transform', 'scale(1)');
        });
    });

    return (
        <>
            <li className='cards__item'>
                <Link className='cards__item__link' to={props.path}>
                    <figure className='cards__item__pic-wrap' data-category={props.label}>
                        <img
                            className='cards__item__img'
                            alt={props.alt}
                            src={props.src}
                        />
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default CardItem;