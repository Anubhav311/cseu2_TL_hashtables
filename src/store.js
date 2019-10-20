import {createStore, applyMiddleware, compose} from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const initState = {}

const middleWare = [reduxThunk];

const store = createStore(
    rootReducer, 
    initState, 
    compose(
        applyMiddleware(...middleWare),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;