
import React, { Component } from 'react';
import './SeasonDisplay.css';
import '../spinner';

const getSeason = (lat, month) => {

    if(month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }

}
const seasonConfig = {
    summer: {
        text: "Let's hit the beach",
        icon: "sun icon"
    },
    winter: {
        text: "Brr... Cold",
        icon: "snowflake icon"
    }
}
class seasonDisplay extends Component {

    render(props) {
        const season = getSeason(this.props.lat,new Date().getMonth());
        const {text,icon} = seasonConfig[season];

        return (
            
            <div className={`season-display ${season}`}>
                
                <i className={`icon-left massive ${icon}`}></i>                   
                <h1>{text}</h1>
                {/* <br />
                {this.props.waiting ? "Waiting on Fetch" : this.props.lat ? `Lattiture: ${this.props.lat}` : `Error: ${this.props.error}`}
                <br />
                {this.props.waiting ? "Waiting on Fetch" : this.props.long ? `Longitude: ${this.props.lat}` : `Error: ${this.props.error}`}
                <br /> */}
                <i className={`icon-right massive ${icon}`}></i>   
            </div>
        );
    }
}

export default seasonDisplay;
