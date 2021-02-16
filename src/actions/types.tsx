import { createAction } from 'redux-act';

const types: { [key: string]: any } = {
  local: createAction('LOCAL'),
  control: createAction('CONTROL'),
  cache: createAction('CACHE'),
}

export default types;