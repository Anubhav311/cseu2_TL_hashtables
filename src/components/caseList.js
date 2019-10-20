import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

function CaseList() {
    const [posts, setPosts] = useState([])

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setPosts(json))
    }, [])

    const caseItems = posts.map((post, key) => (
        <div key={key}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    ))
    return (
        <div>
            <h1>Posts List</h1>
            {caseItems}
        </div>
    )
}

export default CaseList;