import { combineReducers } from 'redux';
import types from '../actions/types';
import { createReplaceReducer } from './utils';

export default combineReducers({
  local: createReplaceReducer(
    {
      [types.local]: (state: any, payload: any) => {
        return { ...state, ...payload };
      },
    },
    {
      local: null
    }
  ),
});
