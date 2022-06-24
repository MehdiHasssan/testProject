import { createStore } from 'redux'

import reducer from './Reducer/index'

export default function configureStore(initialState){
    return createStore(reducer, initialState);
}