
import '../stylesheets/TaskForm.css';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

function TaskForm(props) {
    const [input,setInput] = useState('');

    const handleChange = (e) => {
        console.log('Writing...')
        setInput(e.target.value);
    };

    const addTask = (e) => {
        e.preventDefault();



        const newTask = {
            id: uuidv4(),
            name : input,
            completed: false
        };

        if(input.trim()){
            // eslint-disable-next-line react/prop-types
            props.onSubmit(newTask);

            setInput('');
        }


    };

    return (
        <form 
        className="form-container"
        onSubmit={addTask}>
            <input 
                className="task-input"
                type="text" 
                value={input}
                onChange={handleChange}

            />
            <button 
            className="add-btn">Add</button>
        </form>
    );
}

export default TaskForm;