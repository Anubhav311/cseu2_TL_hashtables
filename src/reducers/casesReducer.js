import {FETCH_CASES, NEW_CASE} from '../actions/types'

const initState = {
    cases: [],
}

export default function(state = initState, action) {
    switch(action.type) {
        case FETCH_CASES:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}