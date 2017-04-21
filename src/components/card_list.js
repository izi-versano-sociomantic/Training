import React from 'react';
import CardListItem from './card_list_item';


const CardList= ( props ) => {
    const cards = props.cards.map( ( card, index ) => {
        return (
            <CardListItem
            onVideoSelect = {props.onVideoSelect}
            key={index}
            card={card} />
        );
    } );

    return (
        <ul className="flash-cards__list">
        { cards }
        </ul>
    );
};

export default CardList;
