import React from 'react';
import './Tiles.css';
import TileItem from './TileItem';
import { Arrow } from './Arrow.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

function Tiles(props) {
    return (
        <div className='tiles'>
            <div className='tiles__container'>
                <div className='tiles__wrapper'>
                    <ul className='tiles__items'>
                        <div className='tiles__arrs' type='left'>
                            <Arrow
                                    className='arr'
                                    buttonStyle='arr--secondary'
                                    buttonSize='arr--large'
                                >
                                    <FontAwesomeIcon icon={faAngleDoubleLeft} />
                            </Arrow>
                        </div>
                        {props.tiles.map(tile => (
                            <TileItem
                                src={tile['src']}
                                text={tile['text']}
                                label={tile['label']}
                                path={tile['path']}
                                alt={tile['alt']}
                            />
                        ))}
                        <div className='tiles__arrs' type='right'>
                            <Arrow
                                    className='arr'
                                    buttonStyle='arr--secondary'
                                    buttonSize='arr--large'
                                >
                                    <FontAwesomeIcon icon={faAngleDoubleRight} />
                            </Arrow>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Tiles;