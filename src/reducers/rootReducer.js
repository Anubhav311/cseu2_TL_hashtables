import casesReducer from './casesReducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    cases: casesReducer
})

export default rootReducer;