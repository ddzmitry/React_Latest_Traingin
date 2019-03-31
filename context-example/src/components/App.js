import React, { Component } from 'react'
import UserCreate from './userCreate'
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/LanguageContext';

export default class App extends Component {

    state = { language: 'english' }

    onLanguageChange = (language) => {
        this.setState({ language })
    }
    render() {
        return (
            <div className="ui container">
                <div>
                    Select a language:
            <i onClick={() => this.onLanguageChange('english')} className="flag us " />
                    <i onClick={() => this.onLanguageChange('dutch')} className="flag nl " />
                </div>
                <ColorContext.Provider value="red">
                <LanguageContext.Provider value={this.state.language}>
                    
                        <UserCreate />
                   
                </LanguageContext.Provider>
                </ColorContext.Provider>
            </div>
        )
    }
}
