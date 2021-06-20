import { FaTimesCircle } from 'react-icons/fa'

const Task = ({ task }) => {
    return (
        <div className='task'>
            <h3>
                {task.text} 
                <FaTimesCircle style={{color: 'red', float: 'right', cursor: 'pointer'}}
                />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
