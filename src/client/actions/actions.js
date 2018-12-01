// import actionType constants
import * as types from '../constants/actionTypes';

export const coinFlip = () => ({
  type: types.COIN_FLIP,
});

export const diceRoll = (sides) => ({
  type: types.DICE_ROLL,
  payload: sides,
});

export const setSides = (text) => ({
  type: types.SET_SIDE,
  payload: text,
})