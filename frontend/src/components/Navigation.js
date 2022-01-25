import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

const Navigation = (props) => {
  if(props.logged === true) {
    return (
      <div className='menu'>
        <NavLink to='/'>Home/Posts</NavLink>
        <NavLink to='/post'>Add posts</NavLink>
        <NavLink to='/logout'>Logout</NavLink>
      </div>
    );
  }
  return (
    <div className='menu'>
      <NavLink to='/'>Home/Posts</NavLink>
      <NavLink to='/login'>Login</NavLink>
      <NavLink to='/register'>Register</NavLink>
    </div>
  );
}

export default Navigation;
