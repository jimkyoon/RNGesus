import { combineReducers } from 'redux';

// import all reducers here
import randomReducer from './randomReducer';


// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  random: randomReducer,
});

// make the combined reducers available for import
export default reducers;
