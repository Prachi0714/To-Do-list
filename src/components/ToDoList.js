
import React, {useState} from 'react'
import './TodoList.css'

const ToDoList = () => {
    const [task, setTask] = useState('');                     // Task Input
    const [tasks, setTasks] = useState([]); 
    
   
                  // Task List

    const addTask = (event) => {
      event.preventDefault();    //refresh the page
        if (task) {                               //not empty
            setTasks([...tasks, task]);
            setTask('');
             }
             
    };


    




    const deleteTask = (task) => {           //new array with deleted task 
        setTasks(tasks.filter(taskItem => taskItem !== task));
    };

    const sortTasks = () => {
        const sortedTasks = [...tasks];
        sortedTasks.sort();
        setTasks(sortedTasks);
      };
      
      
    

   
  return (
    <>
    <div className='main-do'>
    <h3>To-Do List</h3>
    <button className = "btn-sort" onClick={sortTasks}>Sort</button>
    <form onSubmit={addTask}>
        <input type='text' placeholder='Add a Task' className='input-do'  value={task} 
        onChange={e => setTask(e.target.value)}/>

        <input className= "do-date" type='date'/>

        <button type = "submit" className='btn-do'>+ Add</button>
    </form>
   
    <ul>
        {tasks.map((task, index) => (
      <li className='li-do' key={index}>
     {task}                  
     
     <button className = "btn-cross btn1" >Edit</button>

     <button className = "btn-cross btn" onClick={() => deleteTask(task)}>Delete</button>
                                            </li>
                ))}
            </ul>
    </div>
    
    </>
  )
}

export default ToDoList