import { combineReducers } from 'redux';

// import all reducers here
import aReducer from './aReducer';


// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  a: aReducer,
});

// make the combined reducers available for import
export default reducers;
