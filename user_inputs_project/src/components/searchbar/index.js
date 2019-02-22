import React, { Component } from 'react';

class Searchbar extends Component {

    state = {term : ''}
    onInputChange = (event) => {
        this.setState({term:event.target.value})
    }
    onFormSubmit = (event) => {
            this.setState({term:''})
            event.preventDefault();

         }
    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <input 
                    type="text" 
                    placeholder="Image Search" 
                    value={this.state.term} 
                    onChange={this.onInputChange} />
                </form>
                <div className="results" />
            </div>
        );
    }
}

export default Searchbar;
