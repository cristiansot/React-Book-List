# React-Book-List

##Spanish

###Objetivo:
    En esta tarea, creará una aplicación de Lista de libros usando React. Desarrollará una aplicación web donde los usuarios podrán agregar libros a su lista de libros y eliminar libros de su lista de libros. La aplicación se centrará en los componentes de React, la gestión del estado y el manejo básico de eventos. Este proyecto está diseñado para mejorar su comprensión de los conceptos fundamentales de React mediante la creación de una aplicación web simple pero funcional. Agregará de forma iterativa funciones para administrar y mostrar una lista de libros.

Para cada paso a continuación, envíe su código a su repositorio Git antes de pasar al siguiente paso. Esto le ayudará a practicar buenos hábitos de codificación (¡comprometerse con frecuencia!) y también permitirá a sus instructores ver su historial de confirmaciones a medida que avanza por los pasos.

###Paso 1: configuración inicial
    Utilice create-react-app para configurar el entorno de su proyecto. Elimina todo el contenido innecesario.
    En la aplicación, cree un componente de función básica. Comience con un encabezado simple y un párrafo que describa su página.
    Ejecute el servidor React para asegurarse de que la configuración se haya realizado correctamente.

###Paso 2: crear un componente secundario
    A la aplicación, agregue un componente secundario que mostrará la lista de libros.
    Cree un componente BookList que muestre una lista de 3 libros predefinidos.

###Paso 3: Introducción de accesorios
    Modifique el componente BookList para que no muestre libros predefinidos, sino que muestre los libros que recibe como accesorios.
    En la aplicación, asegúrese de pasar la lista de libros a BookList.

###Paso 4: Gestión del Estado
    Ahora, debe hacer que la lista de libros sea dinámica en lugar de una lista estática de libros predefinidos. Introduzca un estado en el componente de su aplicación para realizar un seguimiento de la lista de libros.
    ¡Necesita una forma para que los usuarios agreguen nuevos libros! Agregue un nuevo componente secundario en la aplicación que permitirá la entrada del usuario, llamado AddBookForm.
    Implemente el componente AddBookForm usando un formulario React.

###Paso 5: Manejo de eventos y renderizado dinámico
    Cuando el usuario envía un nuevo título de libro, es necesario actualizar la lista de libros en la aplicación. Agregue manejo de eventos para administrar las entradas de los usuarios.
    Utilice el estado en el componente Aplicación para representar dinámicamente la lista de libros en BookList.

###Paso 6: ampliar la funcionalidad
    Por último, también queremos que los usuarios eliminen libros de su lista de libros. Amplíe la funcionalidad de su aplicación para que:
    Aparece una X en la que se puede hacer clic junto al nombre de cada libro.
    Al hacer clic, la lista de libros se actualiza para que el libro seleccionado se elimine de la lista.

###Paso 7: Agregar persistencia de datos
    Cree una API REST simulada para su página web usando mockapi.io
    Incluya solicitudes OBTENER, PUBLICAR y ELIMINAR cuando se agreguen, vean y eliminen libros.
 

###Entregar:
Un enlace a su repositorio de GitHub que contiene el código del proyecto. Asegúrese de que su repositorio sea público para que se pueda acceder a él y evaluarlo.
¡Una captura de pantalla de tu aplicación con una lista de tus libros favoritos!
 

###Desafíos adicionales para la práctica:
    Agregue una función para editar el título de un libro en la lista.
    Introduzca un estilo simple para mejorar la UI/UX de su aplicación.
    Haga posible que el usuario cargue una imagen de la portada del libro junto con el título y muestre los libros como portadas con los títulos enumerados debajo. (Pista: ¡un nuevo componente, Libro, podría ayudar!)
    Haga posible que el usuario incluya una URL donde pueda comprar el libro y haga un hipervínculo del título del libro a la página de compra.
    ¡Cualquier característica adicional que se te ocurra! ¡Cuantas más funciones agregues, más cómodo te sentirás con React!

#English

###Objective:
    In this assignment, you will create a Book List application using React. You will develop a web application where users can add books to their book list and remove books from their book list. The application will focus on React components, state management, and basic event handling. This project is designed to enhance your understanding of fundamental React concepts by building a simple yet functional web application. You will iteratively add features to manage and display a list of books.

For each step below, commit your code to your Git repository before moving to the next step. This will help you practice good coding habits (commit often!) and also allow your instructors to see your commit history as you move through the steps.

###Step 1: Initial Setup 
    Use create-react-app to set up your project environment. Clear out all of the unnecessary content.
    In App, create a basic function component. Start with a simple heading and a paragraph describing your page.
    Run the React server to make sure your setup was done correctly. 

###Step 2: Creating a Child Component
    To App, add a child component that will display the list of books.
    Create a BookList component that displays a list of 3 pre-defined books.

###Step 3: Introducing Props
    Modify the BookList component so that it does not display pre-defined books, but instead displays books that it receives as props. 
    In App, make sure to pass the list of books to BookList.

###Step 4: Managing State
    Now, you need to make the list of books be dynamic instead of a static list of pre-defined books. Introduce a state in your App component to keep track of the list of books. 
    You need a way for users to add new books! Add a new child component in App that will allow user input, called AddBookForm.
    Implement the AddBookForm component using a React form.

###Step 5: Event Handling and Dynamic Rendering
    When the user submits a new book title, the list of books in App needs to be updated! Add event handling to manage user inputs. 
    Use the state in the App component to dynamically render the list of books in BookList.

###Step 6: Extending Functionality
    Finally, we also want users to take books off of their book list. Extend your App functionality so that:
    A clickable X shows up beside the name of each book
    When clicked, the list of books is updated so that the selected book is removed from the list

###Step 7: Adding Data Persistence
    Create a mock REST API for your webpage using mockapi.io 
    Include GET, POST and DELETE requests when books are added, viewed and deleted 

##Submit:
    A link to your GitHub repository containing the project code. Ensure that your repository is public so it can be accessed and evaluated.
    A screenshot of your application with a list of your favorite books! 
 

###Additional challenges for practice:
    Add a feature to edit the title of a book in the list.
    Introduce simple styling to improve the UI/UX of your application.
    Make it possible for the user to upload an image of the book cover along with the title, and display the books as their covers with titles listed underneath. (Hint: a new component, Book, might help!) 
    Make it possible for the user to include a URL to where to purchase the book, and hyperlink the title of the book to the purchase page.
    Any additional features you can think of! The more features you add, the more comfortable you'll get with React!