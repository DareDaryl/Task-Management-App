import React, { useState } from 'react';
import TodoList from './Components/TodoList';
import TodoForm from './Components/TodoForm';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Modal from './Components/Modal';
import { v4 as uuidv4 } from 'uuid';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import './App.css';


function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(true);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false); // Define state for delete confirmation modal
  const [deleteTodo, setDeleteTodo] = useState(null);

  const addTodo = (text) => {
    setTodos([...todos, { id: uuidv4(), text, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const removeTodo = () => {
    if (deleteTodo) {
      setTodos(todos.filter(todo => todo.id !== deleteTodo));
      setDeleteTodo(null);
    }
    setIsDeleteOpen(false); // Close the delete confirmation modal
  };

  const handleDeleteClick = (id) => {
    setDeleteTodo(id);
    setIsDeleteOpen(true); // Open the delete confirmation modal
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true; // 'all'
  });


  return (
    <div className="App">
      <Navbar setFilter={setFilter} />
      <main>
        <h1>Todo List</h1>
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