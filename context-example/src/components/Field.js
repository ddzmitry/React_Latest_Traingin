import React, { Component } from 'react'
import LanguageContext from '../context/LanguageContext';

export default class Field extends Component {
    static contextType = LanguageContext;
    render() {
        console.log("Field",this.context)
    const text = this.context.language === 'english' ? 'Name' : 'Naam';
    return (
      <div className="ui field">
            <label>{text}</label>
            <input />
      </div>
    )
  }
}
