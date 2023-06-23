// index.stores.js

import { createStore, combineReducers } from 'redux';

import countReducer from './countStores/count.reducer';
import toDoListReducer from './toDoListStores/toDoList.reducer';
import ss10ProductReducer from './ss10ProductStores/ss10Product.reducer';
import ss10ShoppingCartReducer from './ss10ShoppingCartStores/ss10ShoppingCart.reducer'
const rootReducer = combineReducers({
  countStore: countReducer,
  toDoListStore: toDoListReducer,
  ss10ProductStore: ss10ProductReducer,
  ss10ShoppingCartStore: ss10ShoppingCartReducer
});

export const store = createStore(rootReducer);

// store = {
//   countStore,
//   toDoListStore,
//   ss10ProductStore,
//   ss10ShoppingCartStore
// }