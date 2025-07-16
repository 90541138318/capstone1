import { useState } from 'react';
import Navbar from './components/Navbar';
import TaskCard from './components/TaskCard';
import Footer from './components/Footer';
import './App.css';

function App() {
  const navLinks = [
    { text: 'Home', url: '#' },
    { text: 'Tasks', url: '#' },
    { text: 'Profile', url: '#' },
  ];

  const tasks = [
    { id: 1, title: 'Finish homework', description: 'Complete math assignment.', isCompleted: true },
    { id: 2, title: 'Buy groceries', description: 'Milk, Eggs, Bread.', isCompleted: false },
    { id: 3, title: 'Workout', description: '30 mins cardio', isCompleted: false },
    { id: 4, title: 'Read book', description: 'Read 10 pages of React docs.', isCompleted: true },
    { id: 5, title: 'Call friend', description: 'Catch up with Alex.', isCompleted: false },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar title="Task Manager" links={navLinks} />
      <main className="flex-grow p-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map(task => (
          <TaskCard key={task.id} title={task.title} isCompleted={task.isCompleted}>
            {task.description}
          </TaskCard>
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
