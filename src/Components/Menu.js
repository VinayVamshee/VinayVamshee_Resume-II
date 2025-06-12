import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUserAlt, FaCode } from 'react-icons/fa';
import vinayvamshee from './Screenshot 2024-12-15 at 9.28.44 PM.png';

export default function Menu() {
  return (
    <div className="menu">
      <img src={vinayvamshee} alt="..." />
      <name>Pechetti Vinay Vamshee</name>
      <div className="navigation">
        <NavLink to="/" className={({ isActive }) => isActive ? 'btn active' : 'btn'}>
          <FaHome className="icon" /> Home
        </NavLink>
        <NavLink to="/About" className={({ isActive }) => isActive ? 'btn active' : 'btn'}>
          <FaUserAlt className="icon" /> About
        </NavLink>
        <NavLink to="/Projects" className={({ isActive }) => isActive ? 'btn active' : 'btn'}>
          <FaCode className="icon" /> Projects
        </NavLink>
      </div>
    </div>
  );
}
