import {FETCH_CASES, NEW_CASE} from '../actions/types'

const initState = {
    cases: [],
    newCase: {
        title: '',
        body: ''
    }
}

export default function(state = initState, action) {
    switch(action.type) {
        case FETCH_CASES:
            console.log(state)
            return {
                ...state,
                items: action.payload,
            }
            case NEW_CASE:
            // console.log(action)
            return {
                ...state,
                item: action.payload
            }
            default:
            return state;
    }
}