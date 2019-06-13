import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Home from './components/Home';
import Login from './components/Login';

function AppRouter() {
  return (
    <Router>
        <Route path="/" exact component={Login} />
        <Route path="/home/" component={Home} />
    </Router>
  )
}

export default AppRouter;
