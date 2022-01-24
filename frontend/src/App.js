import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Posts from './components/Posts';
import User from './components/User';
import Navigation from './components/Navigation';
import './App.css';

const App = (props) => {
  const [logged, setLogged] = React.useState(false);
  const [name, setName] = React.useState(undefined);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Wall app</h1>
      </header>
      <div>
        <Router>
          <Navigation logged={logged} />
          <User logged={logged} />
          <Routes>
            <Route exact path='/' element={<Posts logged={logged} />} />
            <Route path='/login' element={<Login logged={logged} />} />
            <Route path='/posts' element={<Posts logged={logged} />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
