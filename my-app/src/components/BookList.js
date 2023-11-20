import React from 'react';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import '../css/booklist.css';

const BookList = ({ books, onDeleteBook }) => {
  return (
    <div className='content'>
      {books.map((item, index) => (
        <div key={index} className='contentBook'>
          <div>
            <button className='deleteBtn' onClick={() => onDeleteBook(item.id)}>
              <RiDeleteBin2Fill className='deleteIcon' />
            </button>
            <img className='imgBook' src={item.image} alt='' />
          </div>
          <h2 className='title'>{item.title}</h2>
          <h3 className='author'>{item.author}</h3>
          <p className='description'>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
