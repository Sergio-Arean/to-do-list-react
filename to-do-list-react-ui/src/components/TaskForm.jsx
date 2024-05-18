
import '../stylesheets/TaskForm.css';

function TaskForm() {
    return (
        <form className="form-container">
            <input 
                className="task-input"
                type="text" 
            />
            <button className="add-btn">Agregar</button>
        </form>
    );
}

export default TaskForm;