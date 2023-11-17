import React, { useState, useEffect } from "react";
import './App.css';
import BookList from './components/BookList.js';
import AddBookForm from "./components/AddBookForm.js";
import Axios from 'axios';

const url = "https://654e9880cbc325355742ffed.mockapi.io/app/books";

function App() {
  
  const [books, setBooks] = useState([]);

  function getBooks() {
    Axios.get(url)
    .then((response) => {
      setBooks(response.data);
    });
  }

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="App">
      <header>
        <h1 className='mainTitle'>React Book List</h1>
        <div>
          <AddBookForm />
        </div>
      </header>
      <div className='mainContent'>
        <BookList books={books} />
      </div>
    </div>
  );
}
export default App;