import {ADDNEWDO, DELETEDO, UPDATEDO} from './toDoList.constant'

const initialState = [
  {
    id: 0,
    des: "Đi làm ở Rikkei",
    did: false,
  },
  {
    id: 1,
    des: "Học Java",
    did: true,
  },
]
  
const toDoListReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADDNEWDO:
        return [action.newDo, ...state];
      case DELETEDO:
        const updatedState = state.filter((doItem) => doItem.id !== action.doId);
        return updatedState;
      case UPDATEDO:
        return state.map((doItem) => {
          if (doItem.id === action.doItem.id) {
            return action.doItem;
          }
          return doItem;
        });
      default:
        return state;
    }
};
  
export default toDoListReducer;
  