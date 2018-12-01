import React from 'react';

const PickANum = () => (
  <div>
    <label htmlFor="startNum">Start Number: </label>
    <input id="startNum" type="text"/>
    <label htmlFor="lastNum">Last Number: </label>
    <input id="lastNum" type="text"/>
    <button>PICK A NUMBER</button>
  </div>
);

export default PickANum;
