import React, {useState} from 'react';
import '../css/AddBookForm.css'

function AddBookForm(props) {

    const [input, setInput] = useState('');

    const change = e => {
        console.log('Testing...')
    }

    const sendForm = e => {
        const newBook = {
            id: '1',
            title: 'Title here'
        }
    }

    return (
        <form className="contentForm">
            <input 
                className="titleForm"
                type="text"
                placeholder="Write a title"
                name="title"
                onChange={change}
            />

            <input 
                className="authorForm"
                type="text"
                placeholder="Write a Author"
                name="author"
            />

            <input 
                className="descriptionForm"
                type="text"
                placeholder="Write a description"
                name="description"
            />
            <button className="submit">
                Add Book
            </button>
        </form>
    )
}

export default AddBookForm;