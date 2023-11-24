import React, { useState, useEffect } from 'react';
import BookList from './components/BookList.js';
import AddBookForm from './components/AddBookForm.js';
import Axios from 'axios';
import './css/App.css';

/* The const url variable is storing the URL of the API endpoint that is used to fetch and manipulate
the collection of books. In this case, the URL is pointing to a mock API server that has a /book endpoint. */
const url = 'https://654e9880cbc325355742ffed.mockapi.io/app/books/';

/* The App function is a React component that represents the main application. */
function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  /* The function getBooks makes an HTTP GET request to a specified URL using Axios, and then sets the
  esponse data to a variable called `books` */
  function getBooks() {
    Axios.get(url).then((response) => {
      setBooks(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  /* The function `addBooks` sends a POST request to a specified URL with a news book object, and then
  updates the list of books with the response data.
  newBook - The `newBook` parameter is an object that represents a new book to be added to a collection of books.*/
  function addBooks(newBook) {
    Axios.post(url, newBook)
    .then((response) => {
      setBooks([...books, response.data]);
    })
    .catch((error) => {
      console.log(error);
      alert(`Status code: ${error.response.statusText} - The image must be less than 50kb`)
    });
  }

 /* The deleteBook function sends a DELETE request to the server to delete a book with the specified
 bookId, and then updates the state by fetching the updated list of books.
 bookId - The `bookId` parameter is the unique identifier of the book that needs to be deleted. */
  function deleteBook(bookId) {
    Axios.delete(`${url}/${bookId}`)
    .then(() => {
      // Filter out the deleted book from the state
    getBooks()    
  })
    .catch((error) => {
      console.log(error);
    });
  }

/* The return statement in the App component is returning the JSX (JavaScript XML) code that
represents the structure and content of the component. */
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
