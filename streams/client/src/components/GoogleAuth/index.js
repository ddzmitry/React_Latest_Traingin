import React, { Component } from 'react'

export default class GoogleAuth extends Component {
    state = { isSignedIn: null }
    componentDidMount = () => {
        // Do all logic for google oauth here 
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '719254677393-ig4tkumgn43c0kl8u7mvenrphr5ure8f.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                // After success on library loaded we have access to the library
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });


    }
    // callback on auth being changed 
    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
    };

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return null
        } else if (this.state.isSignedIn) {
            return (
                <button
                    onClick={() => this.auth.signOut()}
                    className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            )
        } else {
            return (
                <button
                    onClick={() => this.auth.signIn()}
                    className="ui green google button">
                    <i className="google icon" />
                    Sign In
                </button>
            )
        }
    }

    render() {
        return (

            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}
