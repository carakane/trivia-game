import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div style={{ 'textAlign': 'center', paddingBottom: '10px', marginBottom: '12px', marginTop: '12px' }}>
       <NavLink 
        style={{ marginRight: '10px', marginLeft: '10px'  }} 
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