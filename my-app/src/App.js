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

  function getBooks() {
    Axios.get(url).then((response) => {
      setBooks(response.data);
    });
  }

  function addBooks(newBook) {
    Axios.post(url, newBook).then((response) => {
      setBooks([...books, response.data]);
    });
  }

  function newBooks(newBook) {
    setBooks([...books, newBook]);
  }

  function deleteBook(bookId) {
    Axios.delete(`${url}/${bookId}`).then(() => {
      // Filter out the deleted book from the state
      setBooks(books.filter((book) => book.id !== bookId));
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
