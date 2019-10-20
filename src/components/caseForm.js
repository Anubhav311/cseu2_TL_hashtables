import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

function CaseForm() {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const handleChange = e => {
        if (e.target.name == 'title') {
            setTitle(e.target.value)
        } else if (e.target.name == 'body') {
            setBody(e.target.value)
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        const submittedCase = {
            title: title,
            body: body
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(submittedCase)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <div>
            <h1>Add Case</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title: </label><br/>
                    <input type='text' name='title' value={title} onChange={handleChange}/>
                </div>
                <br/>
                <div>
                    <label>Body: </label><br/>
                    <textarea name='body' value={body} onChange={handleChange}/>
                </div>
                <br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default CaseForm;