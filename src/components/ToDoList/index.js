import { useState } from 'react';
import './style.css';
import Todo from './Todo';

function ToDoList({allTasks, handleDel, handleEdit, doneTask}) {
    // use State 
    const [tasksDone, setTasksDone] = useState([]);

    // Del task
    const delOneTask = (index) => {
        handleDel(index);
    }

    // Edit task 
    const editThisTask = (index, nameTask) => {
        handleEdit(index, nameTask)
    }

    // Get state of task
    const getState = (index) => {
        setTasksDone((prev) => {
            if(prev.includes(index)) {
                console.log(prev);
                prev.forEach((value, key, self) => {
                    if(value === index) {
                        const newTasksDone = [...self];
                        newTasksDone.splice(key, 1);
                        doneTask(newTasksDone);
                        return newTasksDone;
                    }
                })
            }
            if(!prev.includes(index)) {
                doneTask([...prev, index]);
                return [...prev, index];
            }

        })
    }

    // render 
    return (
        <>
            {/* todo list  */}
            <ul className="task-wrapper">
                {
                    allTasks.map((task, index) =>  {
                        return <Todo 
                            nameTask={task} 
                            key={index} 
                            index={index}
                            delOneTask={delOneTask}
                            editThisTask={editThisTask}
                            getState={getState}
                        />
                    })
                }
            </ul>

            {/* there is no list  */}
            <p className={allTasks.length === 0 ? "no-tasks" : "d-none"}>
                Your list is clear!
            </p>
        </>
    )
}

export default ToDoList;