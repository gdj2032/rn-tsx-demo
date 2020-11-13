import { combineReducers } from 'redux';
import types from '../actions/types';
import { createReplaceReducer } from './utils';

export default combineReducers({
  cache: createReplaceReducer(
    {
      [types.cache]: (state: any, payload: any) => {
        return { ...state, ...payload };
      },
    },
    {
      cache: null
    }
  ),
});
