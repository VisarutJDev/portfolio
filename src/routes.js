import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from './container/App';
import Home from './container/Home'

export default (
    <Router>
        <Route exact path="" component={Home}>
            <Route path="/app" component={App}/>
        </Route>
    </Router>
);