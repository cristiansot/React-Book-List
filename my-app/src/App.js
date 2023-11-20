import React, { useState, useEffect } from 'react';
import BookList from './components/BookList.js';
import AddBookForm from './components/AddBookForm.js';
import Axios from 'axios';
import './css/App.css';

const url = 'https://654e9880cbc325355742ffed.mockapi.io/app/books/';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  //Function that to get books from the server
  function getBooks() {
    Axios.get(url).then((response) => {
      setBooks(response.data);
    });
  }

  //Function that to put books from the server and reorganize the list
  function addBooks(newBook) {
    Axios.post(url, newBook).then((response) => {
      setBooks([...books, response.data]);
    });
  }

  //Function that delete a post when make a click ondelete button
  function deleteBook(bookId) {
    Axios.delete(`${url}/${bookId}`).then(() => {
      // Filter out the deleted book from the state
      setBooks(books.filter((book) => book.id !== bookId));
    })
    .catch((error) => {
      console.log(error);
    });
   
  }

  return (
    <div className='App'>
      <header>
        <h1 className='mainTitle'>React Book List</h1>
        <div>
          <AddBookForm addBooks={addBooks} />
        </div>
      </header>
      <div className='mainContent'>
        <BookList books={books} onDeleteBook={deleteBook} />
      </div>
    </div>
  );
}

export default App;
