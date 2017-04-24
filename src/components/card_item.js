import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class NewCard extends Component {
    constructor( props )
    {
        super( props );

        this._initialState =
        {
          word: '',
          translation: '',
          focused:
          {
           word: false,
           translation: false
          }
        }

        this.state = this._initialState;
    }

    _resetState()
    {
        this.setState( this._initialState );
    }

    render()
    {
       const errors     = validateInputs( this.state.word, this.state.translation );
       const isDisabled = Object.keys( errors ).some( error => errors[ error ] );

       const focusInvalid = ( input ) => {
            const notValid = errors[ input ];
            const displayError = this.state.focused[ input ];

            return notValid ? displayError : false;
        };

        return (
          <form  onSubmit={this.onSubmit} className="form-horizontal" role="form">
            <div className="form-group">
              <label htmlFor="input-word" className="col-xs-2 control-label">Word</label>
              <div className="col-xs-8 col-xs-offset-1">
                <input
                  type="text" value={this.state.word} placeholder="Enter word"
                  value={this.state.word} onChange={this.handleWordChange}
                  onBlur={this.handleBlur( 'word' )}  className={focusInvalid( 'word' ) ? "error" : ""}/>
              </div>
              <label className={focusInvalid( 'word' ) ? "error" : "hidden"}>word require characthers</label>
            </div>
            <div className="form-group">
              <label htmlFor="input-translation" className="col-xs-2 control-label">Translation</label>
              <div className="col-xs-8 col-xs-offset-1">
                <input type="text" placeholder="Enter translation"
                value={this.state.translation}
                onChange={this.handleTranslationChange}
                onBlur={this.handleBlur( 'translation' )}
                className={focusInvalid( 'translation' ) ? "error" : ""}/>
              </div>
              <label className={focusInvalid( 'translation' ) ? "error" : "hidden"}>translation require characthers</label>
            </div>
            <div className="form-group">
              <div className="col-xs-offset-3 col-xs-10">
                 <button type="submit" className="btn btn-default" disabled={isDisabled}>Add</button>
                 <button onClick={this.clearList} type="button" className="btn btn-default" >Clear all</button>
              </div>
            </div>
          </form> );
    };

    handleWordChange = ( evt ) => {
        this.setState( { word: evt.target.value } );
    }

    handleTranslationChange = ( evt ) => {
        this.setState( { translation: evt.target.value } );
    }


    handleBlur = (input) => ( evt ) => {
      this.setState({
        focused: { ...this.state.focused, [ input ]: true },
      });
    }

    clearList = ( evt ) => {
        this.props.ClearAllEvent();
        this._resetState();
    }

    onSubmit = ( evt ) => {
      evt.preventDefault();
      const { word, translation } = this.state;
      var newItem = { title : word, translation : translation };
      this.props.addEvent( { newItem } );
      this._resetState();
    }

}


function validateInputs ( word, translation ) {

  var myRegEx = /^[A-Za-z]+$/;

  return {
    word: word.length === 0 || !( myRegEx.test( word ) ),
    translation: translation.length === 0 || !( myRegEx.test( translation ))
  };
}

export default NewCard;
