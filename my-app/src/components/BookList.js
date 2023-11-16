import React, {useState} from 'react';
import AddBookForm from './AddBookForm';
import Books from './Books';
// import '../css/booklist.css'

function BookList() {

const [books, setBooks] = useState([]); 
const addBook = book => {
  console.log('Book added');
  console.log('Book');
}
  return (
    <>
      <div className='list'>
        {
          books.map((book) => 
            <book
              imgBook={book.image}
              title={book.title}
              author={book.author}
              description={book.description}
           />
          )
        }
      </div>
    </>
  );
}

export default BookList;


// function BookList(props) {
//     return (
//       <div className='content'>
//           <img className='imgBook' src={require(`../images/book-${props.image}.jpg`)}
//           alt='Book image' />
//           <div className='contenText'>
//             <h2 className='title'>{props.title}</h2>
//             <h3 className='author'>{props.author}</h3>
//             <p className='description'>{props.description}</p>
//           </div>
//       </div>
//     )
// }