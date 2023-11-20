import { useForm } from 'react-hook-form';
import { LuUpload } from "react-icons/lu";
import { v4 as uuidv4 } from 'uuid';
import '../css/AddBookForm.css';

/* The AddBookForm function is a React component that renders a form for adding a new book. */
function AddBookForm({ addBooks }) {
  
  const { register, handleSubmit, setValue, reset } = useForm('');
  const onSubmit = handleSubmit((data) => {

    const newBook = {
      id: uuidv4(),
      title: data.title,
      author: data.author,
      description: data.description,
      // src={URL.createObjectURL data.image}
      image: data.image,
    };
    console.log(data);

    addBooks(newBook);
    reset(); // Reset all form fields
  });

  return ( 
  /* Structure of the form */
  /* Event onSubmit for to save the data for to make a new book */
    <form className="contentForm" onSubmit={onSubmit}> 
      <input
        type="text"
        placeholder="Write a title"
        name="title"
        {...register('title', {required: true})}
      />
      <input
        type="text"
        placeholder="Write an Author"
        name="author"
        {...register('author', {required: true})}
      />
      <textarea
        className='descInputText'
        type="text"
        placeholder="Write a description"
        name="description"
        {...register('description', {required: true})}
      />
      
      <button className="uploadButton">
        <i className='uploadIcon'><LuUpload /></i>
        <p>Upload File</p>
        <input
          className="image"
          type="file"
          // {...register('image', {required: true})}
      
          onChange={(e) => {
            // I need to resolve this point --> how to upload images at the server

            setValue('image', e.target.files[0].name);
            console.log(e.target.files[0].name)
            
          }}
        />
      </button>
      
      <button className="submit" type="submit">
        Add Book
      </button>
    </form>
  );
}

export default AddBookForm;
