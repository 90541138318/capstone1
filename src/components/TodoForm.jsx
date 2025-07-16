import React, { useState } from 'react';

const TodoForm = ({ onAdd }) => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      onAdd(task, parseInt(priority));
      setTask('');
      setPriority(1);
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task"
        value={task}
        onChange={e => setTask(e.target.value)}
        required
      />
      <select value={priority} onChange={e => setPriority(e.target.value)}>
        <option value={1}>Low</option>
        <option value={2}>Medium</option>
        <option value={3}>High</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;
