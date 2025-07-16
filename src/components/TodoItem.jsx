const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div>
        <strong>{todo.task}</strong> (Priority: {todo.priority})
        <br />
        <span>Status: {todo.completed ? 'Completed' : 'Pending'}</span>
      </div>
      <div className="actions">
        <button onClick={onToggle}>
          {todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
        </button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
