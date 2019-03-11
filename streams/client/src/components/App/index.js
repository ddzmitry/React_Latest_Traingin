import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

const page1 = () => {

    return (
        <div>PageOne
        <Link to="/pagetwo"> Navigate to page two</Link>
        </div>
    )
}
const page2 = () => {

    return (
        <div>PageTwo
        <Link to="/"> Navigate to page one</Link>

        </div>
    )
}

class App extends Component {
    render() {
        return (
            <div >
                <BrowserRouter>
                    <div >
                    <Route path="/" exact component={page1}/>
                    <Route path="/pagetwo" component={page2} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
