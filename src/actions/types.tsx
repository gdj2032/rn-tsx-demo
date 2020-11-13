import { createAction } from 'redux-act';

const types = {
  local: createAction('LOCAL'),
  control: createAction('CONTROL'),
  cache: createAction('CACHE'),
}

export default types;