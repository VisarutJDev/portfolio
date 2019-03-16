import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from './container/App';
import Home from './container/Home'
import Navigation from './navigation/Navigation'

export default (
    <Router>
        <Navigation>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/work-experience" component={App} />
            </Switch>
        </Navigation>

    </Router>
);