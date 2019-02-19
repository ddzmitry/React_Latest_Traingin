
import React, { Component } from 'react';

const getSeason = (lat, month) => {
    console.log(month)
    if(month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }

}
class seasonDisplay extends Component {

    render(props) {
        const season = getSeason(this.props.lat,new Date().getMonth());
        const icon = season === 'winter' ? 'snowflake icon' : 'sun icon';
        return (
            <div>
                <i className={`${icon}`}></i>
                
                {season === 'winter' ? 'brr chilly'   : 'lets hit the beach <i class="sun icon"></i>'}
                <br />
                {this.props.waiting ? "Waiting on Fetch" : this.props.lat ? `Lattiture: ${this.props.lat}` : `Error: ${this.props.error}`}
                <br />
                {this.props.waiting ? "Waiting on Fetch" : this.props.long ? `Longitude: ${this.props.lat}` : `Error: ${this.props.error}`}
            </div>
        );
    }
}

export default seasonDisplay;
