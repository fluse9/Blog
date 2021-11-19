import React from 'react';
import { Button } from './Button.js';
import { Arrow } from './Arrow.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import '../App.css';
import './Hero.css';

function Hero() {
    return (
        <div className='hero__container'>
            <video src='/videos/video-1.mp4' autoPlay loop muted />
            <h1>BRING YOUR BRAND TO LIFE</h1>
            <p>It all starts with a stunning website and killer user experience.</p>
            <div className='hero__btns'>
                <Button
                    className='btn'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
                <Button
                    className='btn'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>
            <div className='hero__arrs'>
                <Arrow
                        className='arr'
                        buttonStyle='arr--primary'
                        buttonSize='arr--large'
                    >
                        <FontAwesomeIcon icon={faAngleDoubleDown} />
                </Arrow>
            </div>
        </div>
    );
}

export default Hero;