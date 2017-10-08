import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
       <NavLink 
        style={{ marginRight: '10px' }} 
        to="/game"
      >
        New Game
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/highscores"
      >
        High Scores
      </NavLink>
      <NavLink
        style={{ marginRight: '10px' }}
        to="/instructions"
      >
        Instructions
      </NavLink>
    </div>
  );
}

export default NavBar;