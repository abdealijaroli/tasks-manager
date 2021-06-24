import {useState, useEffect} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(()=>{
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  // Add task
  const addTask = (t) => {
    const id = Math.floor(Math.random()*10000) + 1            //Generating a random number for assigning id.
    const newTask = {id, ...t}
    
    setTasks([...tasks, newTask])
  }

  // Delete task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=> task.id === id ? 
    ({...task, reminder: !task.reminder}) : 
    task))
  }

  return (
    <div className='container'> 
        <Header onShowAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
        {showAddTask && <AddTask onAdd={addTask}/>}              {/*short-hand ternary operator when "else" is not needed*/}
        {tasks.length > 0 ? (
          <Tasks 
          tasks={tasks} 
          onDelete={deleteTask} 
          onToggle={toggleReminder} />
          ) : (
          "No tasks to show.") }
    </div>
  );
}

export default App;
