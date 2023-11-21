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
    // console.log(data);
  

    addBooks(newBook);
    reset(); // Reset all form fields
  });

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
          className="image"
          type="file"
          name="image"
          
          onChange={(e) => {

            const image = e.target.files[0];

            setValue('image', image); 

            const reader = new FileReader();
            reader.addEventListener("load", () => {
              console.log(reader.result);
             
            });

            reader.readAsDataURL(image); 
           
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
