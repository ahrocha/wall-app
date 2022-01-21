import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Posts from './components/Posts';
import User from './components/User';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Router>

        </Router>
        <User />
      </header>
      <div>
        <Router>
        <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/posts'>Posts</NavLink>
        <NavLink to='/login'>login</NavLink>
        </div>
      <Routes>
        <Route exact path='/' element={<Posts />} />
        <Route path='/login' element={<Login />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
