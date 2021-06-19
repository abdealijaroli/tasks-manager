import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors appointment',
        day: '22nd June at 2:00pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Grocery shopping',
        day: '25th June at 12:00pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Managers Meeting',
        day: '29th June at 4:00pm',
        reminder: false,
    }
])
  return (
    <div className="container"> 
        <Header />
        <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
