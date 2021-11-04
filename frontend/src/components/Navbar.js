import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { Button } from './Button.js';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    $(window).scroll(function() {
        var alpha = window.pageYOffset / 400.0;
        $('.navbar').css('background-color', 'rgba(0, 0, 0, ' + alpha + ')');
    });

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        Frank.js
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Services
                            </Link>
                            <Link to='/portfolio' className='nav-links' onClick={closeMobileMenu}>
                                Portfolio
                            </Link>
                            <Link to='/blog' className='nav-links' onClick={closeMobileMenu}>
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/sign-up'
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}
                            >
                                Sign Up
                            </Link>
                        </li>
                      </ul>
                      {button && <Button buttonStyle='btn--outline' buttonSize='btn--small'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;