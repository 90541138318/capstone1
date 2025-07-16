import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import Footer from './components/Footer';

function App() {
  const [todos, setTodos] = useState([]);
  const [showCompleted, setShowCompleted] = useState(true);

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(saved);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (task, priority) => {
    setTodos([...todos, { id: Date.now(), task, priority, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const sortedTodos = [...todos].sort((a, b) => a.priority - b.priority);
  const visibleTodos = showCompleted
    ? sortedTodos
    : sortedTodos.filter(todo => !todo.completed);

  return (
    <div className="container">
      <Navbar />
      <TodoForm onAdd={addTodo} />
      <div className="toggle-container">
        <label>
          <input
            type="checkbox"
            checked={showCompleted}
            onChange={() => setShowCompleted(!showCompleted)}
          />
          Show Completed
        </label>
      </div>
      <div className="todo-list">
        {visibleTodos.length === 0 ? (
          <p>No tasks available.</p>
        ) : (
          visibleTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={() => toggleComplete(todo.id)}
              onDelete={() => deleteTodo(todo.id)}
            />
          ))
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
