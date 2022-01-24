import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Posts from './components/Posts';
import User from './components/User';
import Navigation from './components/Navigation';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      user: []
    };
    this.handler = this.handler.bind(this);
    this.logged = false;
  }

  handler(userData) {
    if (this.logged === true) {
      return;
    }

    this.logged = true;
    this.setState({
      user: userData.name
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Wall app</h1>
        </header>
        <div>
          <Router>
            <Navigation logged={this.logged} />
            <User logged={this.logged} action={this.handler} user={this.state.user} />
            <Routes>
              <Route exact path='/' element={<Posts logged={this.logged} user={this.state.user} />} />
              <Route path='/login' element={<Login logged={this.logged} user={this.state.user} />} />
              <Route path='/logout' element={<Login logged={this.logged} user={this.state.user} />} />
              <Route path='/posts' element={<Posts logged={this.logged} user={this.state.user} />} />
              <Route path='/register' element={<Register />} />
            </Routes>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
