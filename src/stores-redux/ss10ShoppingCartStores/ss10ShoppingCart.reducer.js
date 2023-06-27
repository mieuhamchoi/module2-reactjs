const initState = []

const ss10ShoppingCartReducer = (state = initState, action) => {
    switch(action.type) {
        case "ADD_TO_CART":
            let tempState = [...state];
            let check = tempState.find((item) => item.productId == action.payload.productId);
            if (!check) {
                tempState.push(action.payload)
                return tempState
            }else {
                return tempState.map((item) => {
                    if (item.productId === action.payload.productId) {
                      item.quantity += action.payload.quantity;
                    }
                    return item;
                });
            }
        case "DELETE_ITEM_IN_CART":
            return state.filter((item) => item.productId != action.payload);
        case "UPDATE_ITEM_IN_CART":
            return state.map((item) => {
                if (item.productId == action.payload.productId) {
                    item = action.payload;
                }
                return item
            });
        default:
            return state
    }
}


export default ss10ShoppingCartReducer