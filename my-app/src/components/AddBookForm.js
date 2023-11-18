import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import '../css/AddBookForm.css';

function AddBookForm({ addBooks }) {
  const { register, handleSubmit, setValue, reset } = useForm('');

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

  return (
    <form className="contentForm" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Write a title"
        name="title"
        {...register('title')}
      />
      <input
        type="text"
        placeholder="Write an Author"
        name="author"
        {...register('author')}
      />
      <input
        type="text"
        placeholder="Write a description"
        name="description"
        {...register('description')}
      />
      <div className="inputText">
        <input
          className="image"
          type="file"
          {...register('image')}
          onChange={(e) => {
            // I need to resolve this point --> how to upload images at the server
            setValue('image', e.target.value);
          }}
        />
      </div>

      <button className="submit" type="submit">
        Add Book
      </button>
    </form>
  );
}

export default AddBookForm;
