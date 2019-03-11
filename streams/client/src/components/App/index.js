import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

const page1 = () => {

    return (
        <div>PageOne
        <a href="/pagetwo"> Navigate to page two</a>
        </div>
    )
}
const page2 = () => {

    return (
        <div>PageTwo
        <a href="/"> Navigate to page one</a>

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
