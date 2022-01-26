import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';
import Post from './components/Post';
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
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.state = {
      logged: false,
      user: []
    };
    this.setState({
      logged: false
    });
  }

  handler(userData) {

    if (this.state.logged === true) {
      return;
    }

    this.state.logged = true;
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
        <Router>
          <Navigation logged={this.state.logged} />
          <User logged={this.state.logged} action={this.handler} user={this.state.user} />
          <div className="container">
            <div className="row">
              <Routes>
                <Route exact path='/' element={<Posts logged={this.state.logged} user={this.state.user} />} />
                <Route path='/login' element={<Login logged={this.state.logged} user={this.state.user} action={this.handler} />} />
                <Route path='/logout' element={<Logout logged={this.state.logged} user={this.state.user} action={this.logout} />} />
                <Route path='/posts' element={<Posts logged={this.state.logged} user={this.state.user} />} />
                <Route path='/post' element={<Post logged={this.state.logged} user={this.state.user} />} />
                <Route path='/register' element={<Register />} />
              </Routes>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
