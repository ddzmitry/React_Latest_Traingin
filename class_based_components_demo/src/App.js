import React, { Component } from 'react';
import SeasonDisplay from './components/seasonDisplay';

class App extends Component {

  state = { lat: null, long: null, error: null, waiting: true }

  componentWillMount() {

  }
  componentDidMount() {

    window.navigator.geolocation.getCurrentPosition(
      position => {
        let { latitude, longitude } = position.coords
        this.setState({ lat: latitude, long: longitude, waiting: false })
      },
      error => {
        this.setState({ error: error.message, waiting: false })
      }
    );
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState)
  }

  render() {
    return (
      <div className="App">
        <SeasonDisplay {...this.state} />
      </div>
    );
  }
}

export default App;
