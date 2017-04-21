import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class NewCard extends Component {
    constructor( props )
    {
        super( props );

        this.onSubmit = this.onSubmit.bind( this );
    }

    render()
    {
        return (
          <form  onSubmit={this.onSubmit} className="form-horizontal" role="form">
            <div className="form-group">
              <label htmlFor="input-word" className="col-xs-2 control-label">Word</label>
              <div className="col-xs-8 col-xs-offset-1">
                <input type="text"  ref="itemName"className="form-control"/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="input-translation" className="col-xs-2 control-label">Translation</label>
              <div className="col-xs-8 col-xs-offset-1">
                <input type="text" ref="itemTranslation"   className="form-control"/>
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-offset-3 col-xs-10">
                 <button type="submit" className="btn btn-default">Add</button>
                 <button type="button" className="btn btn-default" >Clear all</button>
              </div>
            </div>
          </form> );



    }

    onSubmit( event ){
        event.preventDefault();
        var input = ReactDOM.findDOMNode( this.refs.itemName );
        var inputTranslation = ReactDOM.findDOMNode( this.refs.itemTranslation );
        var newItem = { title : input.value, translation : inputTranslation.value };
        this.props.addEvent( { newItem } );
        input.value = '';
    }
}

export default NewCard;
