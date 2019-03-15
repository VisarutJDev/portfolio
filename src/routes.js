import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import App from './container/App';
import Home from './container/Home'
import Navigation from './navigation/Navigation'

export default (
    <Router>
        <Navigation>
            <Route exact path="" component={Home}>
                {/* <Route path="/app" component={App} /> */}
            </Route>
        </Navigation>

    </Router>
);