import { combineReducers } from 'redux';
import makeChange from './reducer';

const rootReducer = combineReducers({
  count: makeChange,
});

export default rootReducer;
