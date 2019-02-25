import React, { Component } from 'react';
import unsplash from '../../api/unsplash';
import Searchbar from '../searchbar';
import Imagelist from '../imagelist';

class App extends Component {
    state = { images: [] }
    onFormSubmit = async  (searchTerm) => {    
        const response = await 
            unsplash.get("/search/photos", {
            params: { query: searchTerm,
                      client_id: '26c98f4d358393e6282d34c18315f25fc951faf5131f44775fd40e9d0a152815'} 
        });

        this.setState({ images: response.data.results});
    }


  render() {
    return (
      <div className="ui container">
            <Searchbar onSubmit={this.onFormSubmit}/>
            <Imagelist images={this.state.images} />
      </div>
    );
  }
}

export default App;
