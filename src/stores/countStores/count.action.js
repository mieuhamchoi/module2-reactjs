// count.actions.js

import { INCREMENT, DECREMENT } from './count.constant';

export const incrementCount = () => ({
  type: INCREMENT
});

export const decrementCount = () => ({
  type: DECREMENT
});
