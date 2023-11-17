import React, {useState} from 'react';
import { v4 as uuidv4 } from "uuid";
import '../css/AddBookForm.css';


function AddBookForm(props) {

    const [input, setInput] = useState('');

    const change = e => {
        setInput(e.target.value);
        console.log(e.target.value);
    }

    const sendForm = e => {
        e.preventDefault();
        // console.log('Sending form')
        const newBook  = {
            id: uuidv4(),
            title: input,
        }
        props.onSubmit(newBook);
    }

    return (
        <form className="contentForm" onSubmit={sendForm}>
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