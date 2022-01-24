import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className='menu'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/posts'>Posts</NavLink>
      <NavLink to='/login'>login</NavLink>
    </div>
  );
}

export default Navigation;
