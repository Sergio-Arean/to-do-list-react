
import '../stylesheets/Task.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

// eslint-disable-next-line react/prop-types
function Task({ id, name, completed, completeTask, deleteTask }) {
    return (
        <div className={completed ? "task-container completed" : "task-container"}>
            <p 
            className="title"
            onClick={()=>completeTask(id)}>
                {name}</p>

            <div 
            className="icon"
            onClick={()=>deleteTask(id)}>
                <AiOutlineCloseCircle />
            </div>
        </div>
    );
}

export default Task;