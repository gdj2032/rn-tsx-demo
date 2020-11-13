
import { createReducer } from 'redux-act';

const createReplaceReducer = (actionType: any, defaultState: any) =>
createReducer(
  {
    [actionType]: (state, payload) => payload,
  },
  defaultState,
);

const reducerCreator = (actionType: any, defaultState = {}) =>
createReducer(
  {
    // payload 里面添加一个 flag
    [actionType]: (state, payload) => ({ ...state, ...payload }),
  },
  defaultState,
);

export {
  createReplaceReducer,
  reducerCreator,
};
