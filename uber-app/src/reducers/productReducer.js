import {FETCH_PRODUCTS} from '../actions';

const INIT_STATE = [];

export default (state=INIT_STATE, action) => {
    switch(action.type){
        case FETCH_PRODUCTS:
            return state;
        default:
            return state;
    }
}