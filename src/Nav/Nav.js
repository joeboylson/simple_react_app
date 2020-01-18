import React from 'react';

// react router
import { Link } from 'react-router-dom';

// styling
import './Nav.css';

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Nav;
