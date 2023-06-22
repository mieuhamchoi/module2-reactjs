// index.stores.js

import { createStore, combineReducers } from 'redux';

import countReducer from './countStores/count.reducer';
import toDoListReducer from './toDoListStores/toDoList.reducer';

const rootReducer = combineReducers({
  countStore: countReducer,
  toDoListStore: toDoListReducer
});

export const store = createStore(rootReducer);
