import React from 'react';
// import '../css/Books.css'

function Books({title, author, description, image}) { 
    return (
        <div className='content'>
          <img className='imgBook' src={require(`../images/book-${image}.jpg`)}
          alt='Book image' />
          <div className='contenText'>
            <h2 className='title'>{title}</h2>
            <h3 className='author'>{author}</h3>
            <p className='description'>{description}</p>
          </div>
      </div>
    )
}

export default Books;

{/* <div className='mainContent'>
            <BookList
            image='holy-ghost'
            title='Holy Ghosts'
            author='Edited by Fiona Snailham'
            description='I confess I have a particular dislike to remain in a church after dusk; 
            it recalls to my mind the most painful story I ever heard.' />

            <BookList
            image='jumping-jen   ny'
            title='Jumping Jenny'
            author='Anthony Berkeley'
            description='This ground-breaking novel is one of the first, if not the first, inverted mysteries, 
            in which the killer is known by the reader all along. "Mr. Anthony Berkeley deserves all gratitude 
            for his energetic efforts to escape from the thraldom of formula... If you are hard-boiled and 
            disillusioned about detectives, you will find this tale very refreshing." - Dorothy L. Sayers' />

            <BookList
            image='queens-of-the-abyss'
            title='Queens of the Abyss'
            author='Edited by Mike Ashley'
            description='An anthology pulling together the stories of the forgotten women writers who pioneered
            and developed the "weird tale" in the early 20th Century. The majority of the volume is never before 
            republished material, exclusive to the BL collections. This title is a spiritual successor to 
            Glimpses of the Unknown, an early Tales of the Weird title which has seen a positive response 
            from fans, scholars and booksellers.' />
        </div> */}