import {ADD_TO_CART, REMOVE_FROM_CART} from '../actions'; 

const shoppingCartInitialState = []
export default (state = shoppingCartInitialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.payload]
        case REMOVE_FROM_CART:
            const keepItem = (item) => (item.id!==action.payload.id)
            return state.filter(keepItem);
        default:
            return state
    }
}