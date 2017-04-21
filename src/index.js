import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import CardList from  './components/card_list';
import CardItem from  './components/card_item';

let AllCards =  [ { title : 'one', translation : 'one'} ];

class App extends Component {
    constructor( props )
    {
        super( props );

        this.state = { cards : AllCards };

        this.addEvent = this.addEvent.bind( this );
    }


    addEvent( todoItem ){
        AllCards.push( todoItem.newItem );
        this.setState( {cards : AllCards} );
    }

    render()
    {
        return (
            <div className="row clearfix">
            <div className="col-md-4 column">
            </div>
            <div className="col-md-4 column"/>
            <div className="page-header">
             <h1>
               <div>
                 Flash Cards
               </div>
             </h1>
            </div>
            <CardList
               cards={this.state.cards} />
            <CardItem addEvent={this.addEvent}  />
            </div>
        );
    }
}

ReactDOM.render( ( <App /> ), document.querySelector( '.container' ) );
