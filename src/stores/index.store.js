// index.stores.js

import { createStore, combineReducers } from 'redux';

import countReducer from './reducers/count.reducer';
import toDoListReducer from './reducers/toDoList.reducer';

const rootReducer = combineReducers({
  countStore: countReducer,
  toDoListStore: toDoListReducer
});

export const store = createStore(rootReducer);
