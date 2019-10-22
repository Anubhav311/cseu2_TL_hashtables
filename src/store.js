import {createStore, applyMiddleware, compose} from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import firebaseConfig from './config/firebaseConfig'

const initState = {}

const store = createStore(
    rootReducer,
    initState, 
    compose(
        applyMiddleware(reduxThunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(firebaseConfig),
        // reactReduxFirebase(firebaseConfig),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;