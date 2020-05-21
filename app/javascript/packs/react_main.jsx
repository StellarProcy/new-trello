import React, { Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Boards from '../components/Boards';
import Board from '../components/Board';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createConsumer } from "@rails/actioncable";

// const Cable = createConsumer('ws://localhost:3000/cable')
const Cable = createConsumer()

const App = () => {    
    return(
        <Router>
            <Switch>
                <Route exact path="/" render={(props) => <Boards {...props} cable={Cable} />} />
                <Route path="/board/:id" render={(props) => <Board {...props} cable={Cable} />}/>
            </Switch>
        </Router>
    )
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<App />, document.getElementById('root'))
})
  