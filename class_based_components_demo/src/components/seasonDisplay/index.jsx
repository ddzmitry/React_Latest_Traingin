
import React, { Component } from 'react';

class seasonDisplay extends Component {
    render(props) {
        return (
            <div>
                {this.props.waiting ? "Waiting on Fetch" : this.props.lat ? `Lattiture: ${this.props.lat}` : `Error: ${this.props.error}`}
                <br />
                {this.props.waiting ? "Waiting on Fetch" : this.props.long ? `Longitude: ${this.props.lat}` : `Error: ${this.props.error}`}
            </div>
        );
    }
}

export default seasonDisplay;
