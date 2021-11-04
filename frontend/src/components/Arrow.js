import React from 'react';
import { Link } from 'react-router-dom';
import './Arrow.css';

const STYLES = ['arr--primary', 'arr--outline', 'arr--test'];

const SIZES = ['arr--medium', 'arr--large'];

export const Arrow = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to='/sign-up' className='arr-mobile'>
              <button
                    className={`arr ${checkButtonStyle} ${checkButtonSize}`}
                    onClick={onClick}
                    type={type}
              >
                    {children}
              </button>
        </Link>
    );
};