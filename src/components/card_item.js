import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class NewCard extends Component {
    constructor( props )
    {
        super( props );

        this.state = {
              word: '',
              translation: ''
        };
    }

    render()
    {
        return (
          <form  onSubmit={this.onSubmit} className="form-horizontal" role="form">
            <div className="form-group">
              <label htmlFor="input-word" className="col-xs-2 control-label">Word</label>
              <div className="col-xs-8 col-xs-offset-1">
                <input type="text" value={this.state.word} placeholder="Enter word"
                  value={this.state.word} onChange={this.handleWordChange} className="form-control"/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="input-translation" className="col-xs-2 control-label">Translation</label>
              <div className="col-xs-8 col-xs-offset-1">
                <input type="text" placeholder="Enter translation"
                value={this.state.translation} onChange={this.handleTranslationChange}  className="form-control"/>
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-offset-3 col-xs-10">
                 <button type="submit" className="btn btn-default">Add</button>
                 <button onClick={this.clearList} type="button" className="btn btn-default" >Clear all</button>
              </div>
            </div>
          </form> );
    }

    handleWordChange = (evt) => {
        this.setState({ word: evt.target.value });
    }

    handleTranslationChange = (evt) => {
        this.setState({ translation: evt.target.value });
    }

    clearList = (e) => {
        e.preventDefault();
    }

    onSubmit = (e) => {
        const { word, translation } = this.state;
        var newItem = { title : word, translation : translation };
        this.props.addEvent( { newItem } );
        e.preventDefault();
    }
}

export default NewCard;
