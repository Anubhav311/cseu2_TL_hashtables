import {FETCH_CASES, NEW_CASE} from '../actions/types'

const initState = {
    cases: [],
    case: {}
}

export default function(state = initState, action) {
    switch(action.type) {
        default:
            return state;
    }
}