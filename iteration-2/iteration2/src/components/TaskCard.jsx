function TaskCard({ title, isCompleted, children }) {
  return (
    <div className="p-4 border rounded shadow-md bg-white hover:bg-gray-50">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600 mt-1">{children}</p>
      <p className={`mt-2 font-bold ${isCompleted ? 'text-green-600' : 'text-red-600'}`}>
        {isCompleted ? 'Completed' : 'Incomplete'}
      </p>
    </div>
  );
}

export default TaskCard;
