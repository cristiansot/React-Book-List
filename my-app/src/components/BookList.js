import React from 'react';
import '../css/booklist.css'

const BookList = ({books}) => {
  return (
      <div className='content'>
        {books.map((item, index) => (
          <div key = {index} className='contentBook'>
            <img className='imgBook' src={item.image} alt='Book image' />
            <h2 className='title'>{item.title}</h2>
            <h3 className='author'>{item.author}</h3>
            <p className='description'>{item.description}</p>
          </div>
        ))}
      </div>
    );
  }

export default BookList; 