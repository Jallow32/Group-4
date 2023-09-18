import { Link } from 'react-router-dom';
import {firebaseFunctionTest as fire}  from './Connect';
import React from 'react';
const NavBar = () => {
 return (
 <nav>
       <ul>
          <li>
             <Link to="/">Home</Link>
          </li>
          <li>
             <Link to="/Connection">Connection</Link>
          </li>
          <li>
             <Link to="/Signup">User sign up</Link>
          </li>
          
       </ul>
 </nav>
 );
};

export default NavBar;