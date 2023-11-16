import React, {useState} from 'react';
import '../css/booklist.css'

function BookList(props) {

  const [] = useState();
    return (
      <div className='content'>
          <img className='imgBook' src={require(`../images/book-${props.image}.jpg`)}
          alt='Book image' />
          <div className='contenText'>
            <h2 className='title'>{props.title}</h2>
            <h3 className='author'>{props.author}</h3>
            <p className='description'>{props.description}</p>
          </div>
      </div>
    )
}

export default BookList;

{/* <div className='content'>
  <img className='imgBook' src={require(`../images/book-${props.image}.jpg`)}
  alt='Book image' />
  <div className='contenText'>
    <h2 className='title'>{props.title}</h2>
    <h3 className='author'>{props.author}</h3>
    <p className='description'>{props.description}</p>
  </div>
</div> */}