// index.stores.js

import { createStore, combineReducers } from 'redux';

import countReducer from './reducers/count.reducer';

const rootReducer = combineReducers({
  countStore: countReducer
});

export const store = createStore(rootReducer);
