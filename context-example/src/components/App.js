import React, { Component } from 'react'
import UserCreate from './userCreate'
import { LanguageStore } from '../context/LanguageContext';
import ColorContext from '../context/LanguageContext';
import LanguageSelector from './LanguageSelector'
export default class App extends Component {

    render() {
        return (

            <div className="ui container">
                <LanguageStore >
                    <LanguageSelector />
                        <UserCreate />
                </LanguageStore>
            </div>
        )
    }
}
