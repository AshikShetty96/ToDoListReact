// App.js
import React, { useState } from 'react';
import TaskInput from './TaskInput';
import TaskItem from './TaskItem';
import './index.css';

function App() {
  const [toDoList, setToDoList] = useState([]);

  const addTask = (taskName) => {
    const newTask = { id: Date.now(), taskName, checked: false };
    setToDoList([...toDoList, newTask]);
  };

  const toggleTask = (taskId) => {
    const updatedList = toDoList.map((item) =>
      item.id === taskId ? { ...item, checked: !item.checked } : item
    );
    setToDoList(updatedList);
  };

  const deleteTask = (taskId) => {
    const updatedList = toDoList.filter((item) => item.id !== taskId);
    setToDoList(updatedList);
  };

  const editTask = (taskId, newTaskName) => {
    const updatedList = toDoList.map((item) =>
      item.id === taskId ? { ...item, taskName: newTaskName } : item
    );
    setToDoList(updatedList);
  };

  const completedTasks = toDoList.filter((task) => task.checked).length;
  const progress =
    toDoList.length > 0 ? (completedTasks / toDoList.length) * 100 : 0;

  return (
    <div className="container">
      <h1>Daily Task</h1>
      <div className="stats">
        <p>Total completed tasks: {completedTasks}</p>
        <p>Progress: {progress.toFixed(2)}%</p>
      </div>
      <div className="toDoList">
        <span>To do</span>
        <ul className="list-items">
          {toDoList.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          ))}
        </ul>
      </div>
      <TaskInput addTask={addTask} />
    </div>
  );
}

export default App;
