import React, { Component } from 'react';
import Postlist from '../PostList';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Postlist/>
      </div>
    );
  }
}

export default App;
