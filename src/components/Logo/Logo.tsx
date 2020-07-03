import React from 'react';
import logo from './logo.svg';
import './Logo.css';

export default function Logo() {
  return (
    <div className="App-logo-container">
      <img src={logo} className="App-logo" alt="ionic logo" />
      The logo path: {logo}
    </div>
  );
}
