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
        Add navigation
        <User />
      </header>
      <div>
        <Router>
      <Routes>
        <Route exact path='/' element={<Posts />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
