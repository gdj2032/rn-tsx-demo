import { combineReducers } from 'redux';
import cache from './cache';
import control from './control';
import local from './local';

const appReducer = combineReducers({
  cache,
  control,
  local,
});

export default appReducer;
