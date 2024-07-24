/**
 * Interface segregation principle
 *
 * Clients should not be forced to depend on interfaces they do not use
 *
 * Imagine you have a remote control that can operate your TV, DVD player, sound system, and lights. 
 * Instead of having one remote with all the buttons, you have separate remotes for each device. 
 * Each remote only has the buttons necessary for that specific device. This is what ISP 
 * advocates for in your code: small, focused interfaces.
 */

/**
 * Implementation ISP with Functional Components
 */

/**
 * In below Product Component we are passing entire Product{} Object as props.
 * This can be considered a violation of the Interface Segregation Principle (ISP).
 * 
 * To adhere to ISP, we should only pass the required data to each component.
 */

// Image.js

// violation of ISP
const Image = ({ product }) => {
  return <img src={product.imageSrc} alt={product.title} />;
};

// Fix 

const Image = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};

// Product component

const Product = ({ product }) => {
  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating} stars</p>
      {/** <Image product={product} /> violation of the Interface Segregation Principle (ISP) */}
      {/* FIX **/}
      <Image src={product.imageSrc} alt={product.title} />
      
    </div>
  );
};

export default Product;

 /*
 * Example Scenario
 *
 * Manager: Can view tasks, assign tasks, mark tasks as complete, and delete tasks.
 * Employee: Can only view tasks and mark them as complete.
 */


import React from "react";

const TaskList = ({ tasks }) => (
  <ul>
    {tasks.map((task) => (
      <li key={task.id}>
        {task.name} - {task.status}
      </li>
    ))}
  </ul>
);

export default TaskList;

/**
 * 2. Action Components
 * Components for each action that can be performed.
 */


// TaskList component

const ViewTasks = ({ tasks }) => <TaskList tasks={tasks} />;

// AssignTask component

const AssignTask = ({ onAssign }) => {
  const handleAssign = () => {
    const newTask = { id: 4, name: "New Task", status: "Assigned" };
    onAssign(newTask);
  };

  return <button onClick={handleAssign}>Assign Task</button>;
};

// CompleteTask component

const CompleteTask = ({ onComplete }) => {
  const handleComplete = () => {
    const taskId = 1;
    onComplete(taskId);
  };

  return <button onClick={handleComplete}>Complete Task</button>;
};

// DeleteTask component

const DeleteTask = ({ onDelete }) => {
  const handleDelete = () => {
    const taskId = 1;
    onDelete(taskId);
  };

  return <button onClick={handleDelete}>Delete Task</button>;
};

export { ViewTasks, AssignTask, CompleteTask, DeleteTask };


/**
 * 3. Manager Actions Component
 * 
 * Component that combines all the manager actions.
 */

import React, { useState } from 'react';
import { ViewTasks, AssignTask, CompleteTask, DeleteTask } from './Actions';

const ManagerActions = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Task 1", status: "Incomplete" },
    { id: 2, name: "Task 2", status: "Incomplete" },
    { id: 3, name: "Task 3", status: "Incomplete" },
  ]);

  const assignTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const completeTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: "Complete" } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== taskId)
    );
  };

  return (
    <div>
      <ViewTasks tasks={tasks} />
      <AssignTask onAssign={assignTask} />
      <CompleteTask onComplete={completeTask} />
      <DeleteTask onDelete={deleteTask} />
    </div>
  );
};

export default ManagerActions;

/**
 * 4. Employee Actions Component
 * 
 * Component that combines employee actions.
 * 
 */

import React, { useState } from 'react';
import { ViewTasks, CompleteTask } from './Actions';

const EmployeeActions = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Task 1", status: "Incomplete" },
    { id: 2, name: "Task 2", status: "Incomplete" },
    { id: 3, name: "Task 3", status: "Incomplete" },
  ]);

  const completeTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: "Complete" } : task
      )
    );
  };

  return (
    <div>
      <ViewTasks tasks={tasks} />
      <CompleteTask onComplete={completeTask} />
    </div>
  );
};

export default EmployeeActions;

/**
 * 5. Main App Component
 * Combines ManagerActions and EmployeeActions components.
 */

import ManagerActions from './ManagerActions';
import EmployeeActions from './EmployeeActions';

const App = () => {
  return (
    <div>
      <h1>Manager Dashboard</h1>
      <ManagerActions />
      <h1>Employee Dashboard</h1>
      <EmployeeActions />
    </div>
  );
};

export default App;
