import React, { useState } from 'react'; /*Hook provided by React that allows you to add state to 
functional components. It returns an array with two elements:state value and state setter functions*/
import TodoList from './Components/TodoList';
import TodoForm from './Components/TodoForm';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Modal from './Components/Modal';
import { v4 as uuidv4 } from 'uuid';  //to generate unique id's
import Home from './Pages/Home'; //These imports are greyed out/Notworking. Not sure why 
import About from './Pages/About';
import Contact from './Pages/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; //added this for contact button. 
import './App.css';


function App() { //Initialized as empty array. (to do items)
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(true);/*Boolean state to manage the visibility of the welcome 
  modal. Initialized as true to show the modal by default*/
  const [isDeleteOpen, setIsDeleteOpen] = useState(false); // Define state for delete confirmation modal
  const [deleteTodo, setDeleteTodo] = useState(null);


  //ADDING TO DO: 
  const addTodo = (text) => {            /*ADDING TO DO: Adds a new todo to the todos state with a unique ID 
    (generated using uuidv4), the text provided, and a completed status set to fals*/
    setTodos([...todos, { id: uuidv4(), text, completed: false }]);
  };
  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo //if matches; updates completed status 
    ));
  };

  //REMOVING TO DO: 
  const removeTodo = () => { /*REMOVING TO DO: Removes the todo item with the ID stored in 
    deleteTodo from the todos state. Resets deleteTodo to null and closes the delete confirmation modal.*/
    if (deleteTodo) {
      setTodos(todos.filter(todo => todo.id !== deleteTodo));
      setDeleteTodo(null);
    }
    setIsDeleteOpen(false); // Close the delete confirmation modal
  };

//Handles delete click 
  const handleDeleteClick = (id) => { 
    setDeleteTodo(id);
    setIsDeleteOpen(true); // Open the delete confirmation modal
  };

//Filtering To-Do's
  const filteredTodos = todos.filter(todo => {  
    if (filter === 'completed') return todo.completed; /*  === does not perform type conversion.
     It requires both operands to be of the same type for the comparison to return true. If the types differ, it returns false. */
    if (filter === 'incomplete') return !todo.completed;
    return true; // 'all'
  });

//Rendering
  return (
    <div className="App">
      <Navbar setFilter={setFilter} />
      <main>             {/*<main>: Contains the main content, including the title, TodoForm for adding todos, 
      and TodoList for displaying filtered todos. */}
        <h1>Task Management System</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList 
          todos={filteredTodos} 
          toggleComplete={toggleComplete} 
          removeTodo={handleDeleteClick} 
        /> 
      </main>
      <Footer />

      {/* Welcome Modal */}
      <Modal isOpen={isWelcomeOpen} onClose={() => setIsWelcomeOpen(false)}>
        <h2>Hey Karl. Here is my project. I used a Modal to show this message</h2>
        <p>App: Daryl's Task Management system</p>
        <button onClick={() => setIsWelcomeOpen(false)}>Got it!</button>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal isOpen={isDeleteOpen} onClose={() => setIsDeleteOpen(false)}>
        <h2>Are you sure you want to delete this task?</h2>
        <button onClick={removeTodo}>Yes, delete it</button>
        <button onClick={() => setIsDeleteOpen(false)}>Cancel</button>
      </Modal>
    </div>
  );
}
export default App; 


 
 /*This one works 
import React, { useState } from 'react';
import TodoList from './Components/TodoList';
import TodoForm from './Components/TodoForm';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
    </div>
  );
}

export default App; */


//