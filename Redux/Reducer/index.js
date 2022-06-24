import { combineReducers } from 'redux'
import CartReducer from './CartReducer'

let reducers = combineReducers(
    {
    CartReducer: CartReducer,
}
);

const rootReducer =(state,action) =>{
    return reducers(state,action);
};

export default rootReducer