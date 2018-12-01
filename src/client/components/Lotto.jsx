import React from 'react';

const Lotto = () => (
  <div>
    <label htmlFor="regMax">Maximum Number of Regular Numbers: </label>
    <input id="regMax" type="text"/>
    <label htmlFor="megaMax">Maximum Number of Mega Numbers: </label>
    <input id="megaMax" type="text"/>
    <button>GIVE ME MY WINNING NUMBERS</button>
  </div>
);

export default Lotto;
