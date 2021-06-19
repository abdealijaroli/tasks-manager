import React from 'react'
import {useState} from 'react'

const Tasks = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctors appointment',
            day: '22rd June at 2:00pm',
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
        <>
            {tasks.map((task) => (
            <h3 key={task.id}>{task.text}</h3>
            ))}
        </>
    )
}

export default Tasks
