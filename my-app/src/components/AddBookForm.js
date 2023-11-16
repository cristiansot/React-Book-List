import React from 'react';
import '../css/AddBookForm.css'

function AddBookForm(props) {
    return (
        <form className="contentForm">
            <input 
                className="titleForm"
                type="text"
                placeholder="Write a title"
                name="text"
            />

            <input 
                className="authorForm"
                type="text"
                placeholder="Write a title"
                name="text"
            />

            <input 
                className="descriptionForm"
                type="text"
                placeholder="Write a title"
                name="text"
            />
            <button className="submit">
                Add Book
            </button>
        </form>
    )
}

export default AddBookForm;