import React from 'react';
import './TodoItem.css'; // Import the new CSS file

function TodoItem({ todo, toggleComplete, removeTodo }) {
  return (
    <li
      className={`todo-item ${todo.completed ? 'completed' : ''}`}
    >
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;









/*import React from 'react';

function TodoItem({ todo, toggleComplete, removeTodo }) {
  return (
    <li>
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;*/
