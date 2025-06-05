import { useState } from 'react';
import Card from './UI/Card';
import TaskForm from "./UI/TaskForm";
import tasks from '../constant/tasks';

const Dashboard = () => {
  const [tasksState, setTasksState] = useState(tasks);

  const handleAddTask = (newTask) => {
    setTasksState((prevTasks) => [...prevTasks, newTask]);
  };

  const handleEditTask = (updatedTask) => {
    setTasksState((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasksState((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <main className="flex flex-col items-center justify-center w-full h-full">
      <div className="w-[95%] h-[120px] bg-gray-100 p-4 mt-[20px] rounded-lg flex justify-between items-center">
        <div className="flex flex-col items-start justify-center h-full">
          <h1 className="text-2xl font-bold mb-1">Dashboard</h1>
          <p className="text-gray-700 text-[13px] md:text-[18px] md:w-[100%] w-[80%]">
            Welcome to your dashboard! Here you can manage your tasks, view statistics, and more.
          </p>
        </div>
        <TaskForm onAddTask={handleAddTask} />
      </div>

      <div className="w-[95%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {tasksState.length === 0 ? (
          <p className="text-gray-500 col-span-full text-center">
            No tasks available. Add a task to get started!
          </p>
        ) : (
          tasksState.map((task) => (
            <Card
              key={task.id}
              task={task}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
            />
          ))
        )}
      </div>
    </main>
  );
};

export default Dashboard;