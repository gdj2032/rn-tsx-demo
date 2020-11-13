import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import rootReducer from './reducers';

const config = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['cache', 'control'],
  // There is an issue in the source code of redux-persist (default setTimeout does not cleaning)
  timeout: null,
};

export const store = createStore(
  persistReducer(config, rootReducer),
  __DEV__ ? applyMiddleware(thunk, logger) : applyMiddleware(thunk),
);
export const persistor = persistStore(store);
