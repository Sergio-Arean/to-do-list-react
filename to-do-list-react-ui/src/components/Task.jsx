
import '../stylesheets/Task.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

// eslint-disable-next-line react/prop-types
function Task({ name, completed }) {
    return (
        <div className={completed ? "task-container completed" : "task-container"}>
            <p className="title">{name}</p>
            <div className="icon">
                <AiOutlineCloseCircle />
            </div>
        </div>
    );
}

export default Task;