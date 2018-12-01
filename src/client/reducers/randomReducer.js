import * as types from '../constants/actionTypes';

const initialState = {
  sides: '',
  message: null,
  result: null,
};

const randomReducer = (state=initialState, action) => {
  switch(action.type) {
    case types.COIN_FLIP:
      let message;
      let result;
      fetch('http://localhost:3000/random/coinflip', { mode: 'cors', headers: { 'Access-Control-Allow-Origin': '*' } })
        .then(response => response.json())
        .then((data) => {
          message = data.message;
          result = data.result;
          console.log(message, result);
          return {
            ...state,
            message,
            result,
          };
      });

    case types.DICE_ROLL:
      const data = {
        sides: 20
      }
      message;
      result;
      fetch('http://localhost:3000/random/dice', { 
        method: 'POST',
        mode: 'cors',
        headers: { 
          'Content-Type': 'application/json; charset=utf-8',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify()
      })
        .then(response => response.json())
        .then((data) => {
          message = data.message;
          result = data.result;
          console.log(message, result);
          return {
            ...state,
            message,
            result,
          };
      });

    case types.SET_SIDES:
      let sides = action.payload

      return {
        ...state,
        sides
      }
      
    default:
      return state;
  }
};

export default randomReducer;
