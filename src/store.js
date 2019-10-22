import {createStore, applyMiddleware, compose} from 'redux';
import reduxThunk from 'redux-thunk';
import { verifyAuth } from './actions';
import rootReducer from './reducers';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { myFirebase } from './firebase/firebaseConfig';

const initState = {}

const store = createStore(
    rootReducer,
    initState, 
    compose(
        applyMiddleware(reduxThunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(myFirebase),
        // reactReduxFirebase(myFirebase),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;