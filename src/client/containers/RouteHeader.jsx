import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Header = () => (
  <div>
    <ul>
      <li>
        <Link to='/coinflip'>Coin Flip</Link>
      </li>
      <li>
        <Link to='/diceroll'>Dice Roll</Link>
      </li>
      <li>
        <Link to='/pickanum'>Pick A Number</Link>
      </li>
      <li>
        <Link to='/lotto'>Lottery Number</Link>
      </li>
    </ul>
  </div>
);

export default Header;
