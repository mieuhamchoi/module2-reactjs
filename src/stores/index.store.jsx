import {configureStore  } from '@reduxjs/toolkit';

import postReducer from './slices/post.slice';
import countReducer from './slices/count.slice';
import toDoListReducer from './slices/toDoList.slice';
import ss10ProductReducer from './slices/ss10Products.slice'
import ss10SCReducer from './slices/ss10SC.slice'
import commonReducer from './slices/common.slice'
import miniReducer from './slices/mini.slice'

const store = configureStore({
    reducer: {
        postStore: postReducer,
        countStore: countReducer,
        toDoListStore: toDoListReducer,
        ss10ProductStore: ss10ProductReducer,
        ss10SCStore: ss10SCReducer,
        commonStore: commonReducer,
        miniStore: miniReducer
    },
});

export default store;