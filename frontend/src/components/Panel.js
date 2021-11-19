import React from 'react';
import { Button } from './Button.js';
import '../App.css';
import './Panel.css';
import $ from 'jquery';

const PanelMain = (props) => {
    return (
        <div className='panel__container'>
            <div className='panel'>
                <div className='panel__item__wrapper--vertical'>
                    <div className='panel__item' id='panel__item--zoom' style={{ backgroundImage: `url(${ props.background })` }}></div>
                    <div className='panel__item__content'>
                        <h1 type='primary'>{props.title}</h1>
                        <p type='primary'>{props.description}</p>
                        <div className='hero__btns'>
                            <Button
                                className='btn'
                                buttonStyle='btn--outline'
                                buttonSize='btn--large'
                            >
                                {props.button}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const PanelDivided = (props) => {
    return (
        <div className='panel__container'>
            <div className='panel'>
                <div className='panel__item__wrapper--vertical'>
                    <div className='panel__item' style={{ background: '#ececed' }}>
                        <div className='panel__item__content'>
                            <h1 type='alternate'>{props.title}</h1>
                            <p type='alternate'>{props.description}</p>
                            <div className='hero__btns'>
                                <Button
                                    className='btn'
                                    buttonStyle='btn--outline-secondary'
                                    buttonSize='btn--large'
                                >
                                    {props.button}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='panel__item__wrapper--vertical'>
                    <div className='panel__item' id='panel__item--zoom' style={{ backgroundImage: `url(${ props.background })`, backgroundPosition: 'center' }}></div>
                </div>
            </div>
        </div>
    );
}

const PanelCards = (props) => {
    return (
        <div className='panel__container'>
            <div className='panel' style={{ flexFlow: 'column nowrap' }}>
                <div className='panel__item__wrapper--horizontal'>
                    <div className='panel__item' id='panel__item--zoom' style={{ backgroundImage: `url(${ props.background })` }}></div>
                    <div className='panel__item__content'>
                        <h1 type='primary'>{ props.title }</h1>
                        <p type='primary'>{ props.description }</p>
                        <div className='hero__btns'>
                            <Button
                                className='btn'
                                buttonStyle='btn--outline'
                                buttonSize='btn--large'
                            >
                                { props.button }
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='panel__item__wrapper--horizontal'>
                    { props.children }
                </div>
            </div>
        </div>
    );
}

const Panel = (props) => {
    const panelSettings = (props) => ({
        main: <PanelMain {...props} />,
        divided: <PanelDivided {...props} />,
        cards: <PanelCards {...props} />
    });

    $(document).ready(function() {
        $('.panel').mouseover(function() {
            $(this).find('#panel__item--zoom').css('transform', 'scale(1.1)');
        });
        $('.panel').mouseout(function() {
            $(this).find('#panel__item--zoom').css('transform', 'scale(1)');
        });
    });

    return (
        <>
            {panelSettings(props)[props.style]}
        </>
    );
}

export default Panel;