import './App.css';
import {BookList} from './components/BookList.js'

function App() {
  return (     
    <div className="App">
      <div className='mainContent'>
        <h1 className='mainTitle'>React Book List</h1>
        <BookList/>
      </div>
     
    </div>     
  );
}

export default App;
  