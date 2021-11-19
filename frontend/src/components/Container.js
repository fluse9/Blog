import React from 'react';
import '../App.css';
import './Container.css';

function Container(props) {
    return (
        <div className='container'>
            <div className="container__wrapper">
                { props.children }
            </div>
        </div>
    );
}

export default Container;