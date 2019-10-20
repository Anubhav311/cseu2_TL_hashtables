import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const initState = {}

const middleWare = [reduxThunk];

const store = createStore(
    rootReducer, 
    initState, 
    applyMiddleware(...middleWare)
);

export default store;