import React, { useState } from 'react';
import './heroSection.css';

const HeroSection = () => {
  const [input, setInput] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (input.trim() === '') {
      alert('Task cannot be empty!');
      return;
    }
    const newTask = { id: Date.now(), text: input, completed: false, priority };
    setTasks([...tasks, newTask]);
    setInput('');
    setPriority('Medium');
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const priorityOrder = { High: 1, Medium: 2, Low: 3 };

  const tasksToBeDone = tasks
    .filter((task) => !task.completed)
    .sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

  const completedTasks = tasks
    .filter((task) => task.completed)
    .sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

  return (
    <div className="hero-section">
      <h1>Your Daily Routine Planner</h1>
      <h2>Organize your tasks efficiently with priority levels</h2>
      <div className="input-container">
        <input
          type="text"
          value={input}
          placeholder="Add a new task..."
          onChange={(e) => setInput(e.target.value)}
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="task-sections">
        <div className="task-section">
          <h3>Tasks To Be Completed</h3>
          <ul className="task-list">
            {tasksToBeDone.map((task) => (
              <li key={task.id} className={`task-card priority-${task.priority.toLowerCase()}`}>
                <label className='task'>
                  <input
                    className='checkbox'
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                  />
                  {task.text} <span>({task.priority})</span>
                </label>
                <button className='task-button' onClick={() => deleteTask(task.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="task-section">
          <h3>Completed Tasks</h3>
          <ul className="task-list">
            {completedTasks.map((task) => (
              <li key={task.id} className={`task-card completed priority-${task.priority.toLowerCase()}`}>
                <label className='task'>
                  <input
                  className='checkbox'
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                  />
                  {task.text} <span>({task.priority})</span>
                </label>
                <button className='task-button' onClick={() => deleteTask(task.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
