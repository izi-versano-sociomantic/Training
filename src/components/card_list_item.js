import React from 'react';

const CardListItem = ( {card} ) => {

    return (
        <li className="flash-cards__list-item-container">
            <div className="flash-cards__list-item flash-cards__list-item-left">{card.title}</div>
            <div className="flash-cards__list-item flash-cards__list-item-right">{card.translation}</div>
        </li>
    );
};


export default CardListItem;
