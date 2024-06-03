import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../css/HeaderComponent.css';

function HeaderComponent({ name }) {
  return (
    <header className="header-container">
      <FontAwesomeIcon icon={faUser} className="header-icon" />
      <div className="header-content">Name: {name}</div>
    </header>
  );
}

export default HeaderComponent;
