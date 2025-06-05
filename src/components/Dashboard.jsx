import Button from "./UI/Button"
import Card from "./UI/Card"
import tasks from "../constant/tasks"
import { useState } from "react"
import TaskForm from "./UI/TaskForm"

const Dashboard = () => {

    const [tasksState, setTasksState] = useState(tasks); // Initialize with imported tasks

  const handleAddTask = (newTask) => {
    setTasksState((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <main className=' flex flex-col items-center justify-center w-full h-full '>
        <div className='w-[95%] h-[120px] bg-gray-100 p-4 mt-[20px] rounded-lg  flex justify-between items-center'>
           <div className='flex flex-col items-start justify-center h-full'>
             <h1 className='text-2xl font-bold mb-1'>Dashboard</h1>
             <p className='text-gray-700 text-[13px] md:text-[18px] md:w-[100%] w-[80%] '>Welcome to your dashboard! Here you can manage your tasks, view statistics, and more.</p>
           </div>
          
            <div>
                <Button btnName={'Add Task'}/>
            </div>
        </div>

        <TaskForm onAddTask={handleAddTask} />

        <div className="w-[95%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
           {tasksState.length === 0 ? (
          <p className="text-gray-500 col-span-full text-center">
            No tasks available. Add a task to get started!
          </p>
        ) : (
          tasksState.map((task) => (
            <Card key={task.id} task={task} />
          ))
        )}
        </div>
        

    </main>
  )
}

export default Dashboard