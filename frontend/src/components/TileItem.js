import React from 'react';
import { Link } from 'react-router-dom';
import './Tiles.css';
import $ from 'jquery';

function TileItem(props) {
    $(document).ready(function() {
        $('.tiles__item').mouseover(function() {
            $(this).find('.tiles__item__img').css('transform', 'scale(1.1)');
        });
        $('.tiles__item').mouseout(function() {
            $(this).find('.tiles__item__img').css('transform', 'scale(1)');
        });
    });

    return (
        <>
            <li className='tiles__item'>
                <Link className='tiles__item__link' to={props.path}>
                    <figure className='tiles__item__pic-wrap' data-category={props.label}>
                        <img
                            className='tiles__item__img'
                            alt={props.alt}
                            src={props.src}
                        />
                    </figure>
                    <div className='tiles__item__info'>
                        <h5 className='tiles__item__text'>{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default TileItem;