import {FETCH_CASES, NEW_CASE} from './types'

export const fetchCases = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(cases => dispatch({
            type: FETCH_CASES,
            payload: cases
        }))
}

export const createCase = (caseData) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(caseData)
    })
    .then(res => res.json())
    .then(newCase => dispatch({
        type: NEW_CASE,
        payload: newCase
    }))
}