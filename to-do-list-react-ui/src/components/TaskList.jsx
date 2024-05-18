import Task from './Task';
import TaskForm from './TaskForm';
import '../stylesheets/TaskList.css';

function TaskList() {
    return (
        <>
            <TaskForm />
            <div className="list-container">
                <Task name='Aprender React' completed={false} />
                <Task name='Aprender Angular' completed={true} />
            </div>
        </>
    );
}

export default TaskList;