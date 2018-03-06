/* eslint react/prop-types: 'off', jsx-a11y/anchor-is-valid: 'off' */
import React from 'react';

const LogoutButton = ({ onLogoutUserClick }) => (
  <li className="pure-menu-item">
    <a href="#" className="pure-menu-link" onClick={event => onLogoutUserClick(event)}>Logout</a>
  </li>
);

export default LogoutButton;
