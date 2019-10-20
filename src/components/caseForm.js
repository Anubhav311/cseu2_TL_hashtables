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

    return (
        <div>
            <h1>Add Case</h1>
            <form>
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