import { combineReducers } from 'redux';
import types from '../actions/types';
import { createReplaceReducer } from './utils';

export default combineReducers({
  control: createReplaceReducer(
    {
      [types.control]: (state: any, payload: any) => {
        return { ...state, ...payload };
      },
    },
    {
      control: null
    }
  ),
});
