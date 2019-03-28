import React, { Component } from 'react';
import { Router, Route , Switch} from 'react-router-dom';
import StreamCreate from '../Streams/StreamCreate';
import StreamDelete from '../Streams/StreamDelete';
import StreamEdit from '../Streams/StreamEdit';
import StreamList from '../Streams/StreamList';
import StreamShow from '../Streams/StreamShow';
import Header from '../Header';
import history from '../../history';

class App extends Component {
    render() {
        return (
            <div className="ui container">
                <Router history={history}>
                    <div>
                        <Header />
                        {/* Will use only one instance of route at the time */}
                        <Switch>
                        <Route path="/" exact component={StreamList} />
                        <Route path="/streams/new" exact component={StreamCreate} />
                        <Route path="/streams/edit/:id" exact component={StreamEdit} />
                        <Route path="/streams/delete/:id" exact component={StreamDelete} />
                        <Route path="/streams/show" exact component={StreamShow} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
