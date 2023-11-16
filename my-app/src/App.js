import './App.css';
import BookList from './components/BookList.js'
import AddBookForm from './components/AddBookForm.js'
 
function App() {
  return (     
    <div className="App">
      <header>
        <h1 className='mainTitle'>React Book List</h1>
        <div>
          <AddBookForm/>
        </div>
      </header>
      <div className='mainContent'>
        <BookList/>
      </div>
     
    </div>     
  );
}

export default App;
  

// <div className='mainContent'>
//         <BookList
//         image='holy-ghost'
//         title='Holy Ghosts'
//         author='Edited by Fiona Snailham'
//         description='I confess I have a particular dislike to remain in a church after dusk; 
//         it recalls to my mind the most painful story I ever heard.' />

//         <BookList
//         image='jumping-jenny'
//         title='Jumping Jenny'
//         author='Anthony Berkeley'
//         description='This ground-breaking novel is one of the first, if not the first, inverted mysteries, 
//         in which the killer is known by the reader all along. "Mr. Anthony Berkeley deserves all gratitude 
//         for his energetic efforts to escape from the thraldom of formula... If you are hard-boiled and 
//         disillusioned about detectives, you will find this tale very refreshing." - Dorothy L. Sayers' />

//         <BookList
//         image='queens-of-the-abyss'
//         title='Queens of the Abyss'
//         author='Edited by Mike Ashley'
//         description='An anthology pulling together the stories of the forgotten women writers who pioneered
//         and developed the "weird tale" in the early 20th Century. The majority of the volume is never before 
//         republished material, exclusive to the BL collections. This title is a spiritual successor to 
//         Glimpses of the Unknown, an early Tales of the Weird title which has seen a positive response 
//         from fans, scholars and booksellers.' />
//       </div>