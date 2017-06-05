export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

/*export const addToCart = (item) => ({
    type: ADD_TO_CART,
    payload: item
})*/

export const addToCart = (item) => {
    return (dispatch, getState) => {
        const reduxState = getState();
        const itemExists = reduxState.shoppingCart.filter((cartItem) => (
            cartItem.id === item.id
        ));
        if(itemExists.length===0){
            dispatch({
                type: ADD_TO_CART,
                payload: item 
            })
        }
    }
}
export const removeFromCart = (item) => ({
    type:REMOVE_FROM_CART,
    payload: item
})