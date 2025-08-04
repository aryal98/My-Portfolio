import React, { useState } from 'react'

export const ToDoList = () => {
  const[todos, setTodos]=useState('');
  const[task,setTask]=useState([]);

  const handleAddTask =()=>{
    if (todos.trim()!=''){
      setTask([...task,todos]);
      setTodos('');


    }
  };

  const handleDeleteTask =(index)=>{
    const updatedTasks =task.filter((_,i)=>i!==index);//

    setTask(updatedTasks);
  };
  const handleSubmit=(e)=>{
    e.preventDefault(); //preventing refresh
    handleAddTask()
  }



  return (
    <div>
      <div className='flex justify-center text-3xl '>
        <h1 className='bg-[#003399] text-white rounded-full px-10 mt-8 py-4'>To do List</h1>
      </div>
      <div className='flex justify-center mt-12 text-4xl'>
        
<form onSubmit={handleSubmit}>

      <input
       type="text"
       placeholder='Enter the task'
       value={todos}
       onChange={(e)=>setTodos(e.target.value)}//
       className='border border-r-0 rounded-l-full px-10 py-4 focus:outline-none' 
       />

       <button onClick={handleAddTask} className='bg-[#003399] text-white rounded-r-full px-12 border border-[#003399] py-4'>
        +
       </button>
</form>
       </div>

      <div className='flex justify-center mt-12 text-4xl'>

<div className="max-w-[900px]  w-full mx-auto bg-[#003399] text-white  ">

       <ol >
        {task.map((item,index)=>(
          <div className='flex justify-between pl-12 '>
            {index+1}
          <li className='text-center flex-grow ' 
          key={`Task-${index}`}>
            {item}
          </li>
            <button onClick={()=>handleDeleteTask(index) } className='px-12 bg-white text-[#003399] border border-[#003399 ] '>-</button> 
            </div>

))}
       </ol>
</div>
       </div>


    </div>
  )
}
