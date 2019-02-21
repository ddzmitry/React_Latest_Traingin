import React, { Component } from 'react';
import SeasonDisplay from './components/seasonDisplay';
import Spinner from './components/spinner';
class App extends Component {

  state = { lat: null, long: null, error: null, waiting: true }

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

  renderContent() {
    return (this.state.waiting ? <Spinner message="Please,accept location request" /> : <SeasonDisplay {...this.state} />)
  }
  render() {
    return (
      <div className="App">
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
