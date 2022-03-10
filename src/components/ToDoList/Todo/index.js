import { useState } from 'react';
import './style.css';

function Todo({nameTask, index, delOneTask, editThisTask, getState}) {
    const [isDone, setIsDone] = useState(false);

    // Del task
    const delTask = () => {
        delOneTask(index);
    }

    // Edit task
    const editTask = () => {
        editThisTask(index, nameTask);
    }

    // Tick completed tasked
    const tick = () => {
        setIsDone((prev) => {
            return !prev;
        });
        getState(index);
    }

    return (
        // render one task
        <li 
            className={isDone ? 'task done' : 'task'}>
            
            {/* name task */}
            <span>{nameTask}</span>

            {/* Task is done */}
            <button onClick={tick}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d={ isDone ? "M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" : "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}></path>
                </svg>
            </button>

            {/* Delete task */}
            <button onClick={delTask}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
            </button>

            {/* Edit task */}
            <button onClick={editTask}>
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
            </button>

        </li>
    )
}

export default Todo;