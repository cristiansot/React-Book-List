import { useForm } from 'react-hook-form';
import { LuUpload } from "react-icons/lu";
import { v4 as uuidv4 } from 'uuid';
import '../css/AddBookForm.css';

/* The AddBookForm function is a React component that renders a form for adding a new book. */
function AddBookForm({ addBooks }) {
  
  /* useForm hook from the react-hook-form library to initialize form-related functions
  and state variables. */
  const { register, handleSubmit, setValue, reset, formState: {errors} } = useForm('');

  /* The onSubmit function is a callback function that is called when the form is submitted. It is
  responsible for handling the form data and adding a new book. */
  const onSubmit = handleSubmit((data) => {
    
    const newBook = {
      id: uuidv4(),
      title: data.title,
      author: data.author,
      description: data.description,
      image: data.image,
    };
  
    addBooks(newBook);
    reset(); // Reset all form fields
  });

  /* The function `readFileAsDataURL` reads a file and returns a promise that resolves with the file's
  data URL. The "file" parameter is the file object that you want to read as a data URL.*/
  function readFileAsDataURL(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = (event) => {
        resolve(event.target.result); // Resolve with the data URL
      };
  
      reader.onerror = (event) => {
        reject(event.target.error); // Reject with any error that occurred
      };
  
      reader.readAsDataURL(file); // Read the file as a data URL
    });    
  }

  return ( 
  /* Structure of the form */
  /* Event onSubmit for to save the data for to make a new book */
    <form className="contentForm" onSubmit={onSubmit}> 
      <div className='required'>
        <input
          type="text"
          placeholder="Write a title"
          name="title"
          {...register('title', {required: true})}
        />
        { 
          errors.title && <span>Title required</span>
        }
      </div>

      <div className='required'>
        <input
            type="text"
            placeholder="Write an Author"
            name="author"
            {...register('author', {required: true})}
          />
          { 
            errors.author && <span>Author required</span>
          }
      </div>
   
      <div className='required'>
        <textarea
          className='descInputText'
          type="text"
          placeholder="Write a description"
          name="description"
          {...register('description', {required: true})}
        />
        { 
          errors.description && <span>Description required</span>
        }
      </div>

      <button className="uploadButton">
        <i className='uploadIcon'><LuUpload /></i>
        <p>Upload File</p>
        <input
          type="file"
          name="image"

          /* The `onChange` event handler is triggered when the user selects a file for uploading. */
          onChange={(e) => {
            const image = e.target.files[0];     
            const reader = new FileReader();
            reader.addEventListener("load", (e) => {
              console.log(reader.result);
            });

          /* This code block is responsible for reading the selected image file and converting it into
          a data URL. */
          reader.readAsDataURL(image);
          readFileAsDataURL(image)
            .then((dataURL) => {
              setValue('image', dataURL);
            })
            .catch((error) => {
              console.error('Error reading file:', error);
            });
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


