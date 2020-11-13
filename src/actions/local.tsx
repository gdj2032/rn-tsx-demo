import { Action } from 'redux-act';
import types from './types';

export const controlTestAction = (loading: boolean) => (dispatch: (arg0: Action<null, null>) => void) => {
  dispatch(types.control({ loading: loading }));
};
