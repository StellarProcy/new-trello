import React, { Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Boards from '../components/Boards';
import Board from '../components/Board';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {    
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Boards}/>
                <Route path="/board/:id" component={Board}/>
            </Switch>
        </Router>
    )
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<App />, document.getElementById('root'))
})
  