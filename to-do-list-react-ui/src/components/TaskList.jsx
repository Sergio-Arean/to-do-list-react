/* eslint-disable no-unused-vars */
import Task from './Task';
import TaskForm from './TaskForm';
import '../stylesheets/TaskList.css';
import { useState } from 'react';

function TaskList() {
    let mockTasks = [
        {
            id: '111',
            name: 'Study React',
            completed: false
        },
        {
            id: '222',
            name: 'Study Angular',
            completed: true
        } ,
        {
            id: '333',
            name: 'Study View',
            completed: false
        }              
    ];
    const [tasks, setTasks] = useState(mockTasks);

    const addTask = (newTask) => {
        if (newTask.name.trim()) {
            newTask.name = newTask.name.trim();

            const updatedTasks = [newTask, ...tasks];
            setTasks(updatedTasks);

            console.log('task added succesfully. array : ', updatedTasks);
        }
    };

    const completeTask = (id) => {
        const updatedTasks = tasks.map(task => {
            if(task.id === id) {
                task.completed = !task.completed;
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    const deleteTask = (id) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    };

    return (
        <>
            <TaskForm onSubmit={addTask} />
            <div className="list-container">
                {
                    tasks.map((task) => {
                        return (
                        <Task
                            key = {task.id}
                            id= {task.id}
                            name={task.name}
                            completed={task.completed}
                            completeTask={completeTask}
                            deleteTask={deleteTask}
                        />)
                    }
                    )
                }
            </div>
        </>
    );
}

export default TaskList;