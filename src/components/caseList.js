import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

function CaseList() {
    const [cases, setCases] = useState([])

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setCases(json))
    }, [])

    const caseItems = cases.map((post, key) => (
        <div key={key}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    ))
    return (
        <div>
            <h1>Cases List</h1>
            {caseItems}
        </div>
    )
}

export default CaseList;