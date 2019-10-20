import {FETCH_CASES, NEW_CASE} from './types'

export const fetchCases = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(cases => dispatch({
            type: FETCH_CASES,
            payload: cases
        }))
}