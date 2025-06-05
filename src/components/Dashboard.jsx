import Button from "./UI/Button"

const Dashboard = () => {
  return (
    <div className=' flex items-center justify-center w-full h-full '>
        <div className='w-[95%] h-[120px] bg-gray-100 p-4 mt-[20px] rounded-lg  flex justify-between items-center'>
           <div className='flex flex-col items-start justify-center h-full'>
             <h1 className='text-2xl font-bold mb-1'>Dashboard</h1>
             <p className='text-gray-700 text-[13px] w-[80%] '>Welcome to your dashboard! Here you can manage your tasks, view statistics, and more.</p>
           </div>
          
            <div>
                <Button btnName={'Add Task'}/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard