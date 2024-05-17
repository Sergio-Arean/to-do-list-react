// import React from 'react';
import '../stylesheets/Task.css'
function Task( {name} ){

    return (
        <div className="task-container">
            <p className="title">{name}</p>
            <div className="icon">DELETE</div>
        </div>
    )
}

export default Task;