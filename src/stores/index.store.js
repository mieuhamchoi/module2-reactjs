// index.stores.js

import { createStore, combineReducers } from 'redux';

import countReducer from './countStores/count.reducer';
import toDoListReducer from './toDoListStores/toDoList.reducer';
import ss10ProductReducer from './ss10ProductStores/ss10Product.reducer';
import ss10ShoppingCartReducer from './ss10ShoppingCartStores/ss10ShoppingCart.reducer'

const commonReducer = (state = {
  reload: false
}, action) => {
  switch (action.type) {
    case "RELOAD":
      return {
        ...state,
        reload: !state.reload
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  countStore: countReducer,
  toDoListStore: toDoListReducer,
  ss10ProductStore: ss10ProductReducer,
  ss10ShoppingCartStore: ss10ShoppingCartReducer,
  commonStore: commonReducer
});

export const store = createStore(rootReducer);

// store = {
//   countStore,
//   toDoListStore,
//   ss10ProductStore,
//   ss10ShoppingCartStore
// }