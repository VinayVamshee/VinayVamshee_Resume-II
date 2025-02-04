import React from 'react';
import { NavLink } from 'react-router-dom';
import vinayvamshee from './Screenshot 2024-12-15 at 9.28.44 PM.png'

export default function Menu() {
  return (
    <div className='menu'>
      <img src={vinayvamshee} alt='...'/>
        <name>Pechetti Vinay Vamshee</name>
        <div className='navigation'>
          <NavLink to="/" className={({ isActive }) => isActive ? 'btn active' : 'btn'}>Home</NavLink>
          <NavLink to="/About" className={({ isActive }) => isActive ? 'btn active' : 'btn'}>About</NavLink>
          <NavLink to="/Projects" className={({ isActive }) => isActive ? 'btn active' : 'btn'}>Projects</NavLink>
        </div>
    </div>
  );
}
