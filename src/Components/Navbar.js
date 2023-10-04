import { Link } from 'react-router-dom';
import { firebaseFunctionTest as fire } from './Connect';
import React from 'react';

const navStyle = {
  backgroundColor: 'darkblue',
  color: 'white',
  padding: '10px',
};

const ulStyle = {
  listStyleType: 'none',
  padding: '0',
  display: 'flex',
  justifyContent: 'center',
};

const liStyle = {
  margin: '0 10px',
};

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
  fontWeight: 'bold',
};

const NavBar = () => {
  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
        </li>
        <li style={liStyle}>
          <Link to="/live" style={linkStyle}>
            CharacterPage
          </Link>
        </li>
        <li style={liStyle}>
          <Link to="/post" style={linkStyle}>
            Character posting
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
