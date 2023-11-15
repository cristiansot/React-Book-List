import React from 'react';

function BookList() {
    return (
      <div className='content'>
          <img className='imgBook' src={require('../images/book-holy-ghost.jpg')}
          alt='Book image'/>
          <div className='contenText'>
            <h2 className='title'>Holy Ghost</h2>
            <h3 className='author'>Edited by Fiona Snailham</h3>
            <p className='description'>“I confess I have a particular dislike to remain in a church after dusk; 
            it recalls to my mind the most painful story I ever heard.”</p>

          </div>
      </div>
    )
}

export default BookList;