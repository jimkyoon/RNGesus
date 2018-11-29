// import actionType constants
import * as types from '../constants/actionTypes';

export const anAction = (something) => ({
  type: types.AN_ACTION,
  payload: something,
});
