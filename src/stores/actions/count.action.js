// count.actions.js

import { INCREMENT, DECREMENT } from '../constants/count.constant';

export const incrementCount = () => ({
  type: INCREMENT
});

export const decrementCount = () => ({
  type: DECREMENT
});
