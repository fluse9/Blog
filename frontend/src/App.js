import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home.js';
import Navbar from './components/Navbar.js';

function App() {
    return (
        <>
            <Router>
                <Navbar/>
                <Switch>
                    <Route to="/" exact component={Home}/>
                </Switch>
            </Router>
        </>
    );
}

export default App;
