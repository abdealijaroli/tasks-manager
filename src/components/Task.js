import { FaTimesCircle } from 'react-icons/fa'

const Task = ({ task, onDelete }) => {
    return (
        <div className='task'>
            <h3>
                {task.text}
                <FaTimesCircle 
                style={{color: 'red', 
                float: 'right', 
                cursor: 'pointer'}} onClick={()=>onDelete(task.id)}
                />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
