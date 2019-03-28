import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Battle from './Battle';
import Popular from './Popular';
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;


class App extends Component {
  render() {
    return (
      <Router>
      	<div calssname="container">
      		<Nav />
      		<Route exact path='/' component={Home}/>
      		<Route exact path='/battle' component={Battle} />
      		<Route path='/popular' component={Popular} />
      	</div>
      </Router>

    );
  }
}

export default App;
