import casesReducer from './casesReducer'
import auth from './auth';
import { combineReducers } from 'redux';

// const rootReducer = combineReducers({
//     cases: casesReducer
// })

const rootReducer = combineReducers({auth})

export default rootReducer;