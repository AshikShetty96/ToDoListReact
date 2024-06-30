// TaskItem.js
import React, { useState } from 'react';

const TaskItem = ({ task, toggleTask, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTaskName, setEditedTaskName] = useState(task.taskName);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    editTask(task.id, editedTaskName);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditedTaskName(task.taskName);
    setIsEditing(false);
  };

  const handleChange = (event) => {
    setEditedTaskName(event.target.value);
  };

  return (
    <li className={`items ${task.checked ? 'isChecked' : ''}`}>
      <div className="items-text">
        {task.checked ? (
          <input
            type="checkbox"
            checked
            onChange={() => toggleTask(task.id)}
          />
        ) : (
          <input
            type="checkbox"
            onChange={() => toggleTask(task.id)}
          />
        )}
        {isEditing ? (
          <>
            <input
              type="text"
              value={editedTaskName}
              onChange={handleChange}
            />
            <button onClick={handleSaveEdit}>Save</button>
            <button onClick={handleCancelEdit}>Cancel</button>
          </>
        ) : (
          <>
            <span
              className={task.checked ? 'isChecked' : ''}
              onClick={() => toggleTask(task.id)}
            >
              {task.taskName}
            </span>
            <button onClick={handleEdit}>Edit</button>
          </>
        )}
      </div>
      <button className="delete-icon" onClick={() => deleteTask(task.id)}>
        🗑️
      </button>
    </li>
  );
};

export default TaskItem;
