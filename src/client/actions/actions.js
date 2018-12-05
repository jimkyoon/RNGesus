// import actionType constants
import * as types from '../constants/actionTypes';

export const coinFlip = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/random/coinflip', { mode: 'cors', headers: { 'Access-Control-Allow-Origin': '*' } })
        .then(response => response.json())
        .then((data) => {
          dispatch({
            type: types.COIN_FLIP,
            payload: data
          })
      });
  }
}

// export const diceRoll = (sides) => ({
//   type: types.DICE_ROLL,
//   payload: sides,
// });

// export const setSides = (text) => ({
//   type: types.SET_SIDE,
//   payload: text,
// })