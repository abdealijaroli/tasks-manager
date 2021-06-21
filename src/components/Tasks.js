import Task from "./Task"

const Tasks = ({ tasks, onDelete, onToggle}) => {
    return ( 
        <>
        <p>Saved tasks: </p>
        <br></br>
            {tasks.map((task) => (
            <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
            ))}
        <br></br>
        <p>(Double click the task to set as reminder)</p>
        </>
    )
}

export default Tasks
