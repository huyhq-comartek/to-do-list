import React from 'react';
import './style.css';
import Todo from './Todo';


interface Props {
    allTasks: {
        text: string,
        check: boolean
    }[],
    handleDel: (index: number) => void,
    handleEdit: (index: number, nameTask: string) => void,
    unChecking: (index: number) => void,
    checking: (index: number) => void,
    isActive: string,
    dellAll: () => void
}

function ToDoList({
    allTasks, 
    handleDel, 
    handleEdit, 
    unChecking, 
    checking, 
    isActive, 
    dellAll
}: Props){

    // Del task
    const delOneTask = (index: number) => {
        handleDel(index);
    }

    // Edit task 
    const editThisTask = (index: number, nameTask: string) => {
        handleEdit(index, nameTask)
    }

    // render 
    return (
        <>
            {/* todo list  */}
            <ul className="task-wrapper">
                {
                    allTasks.map((task: {
                        text: string,
                        check: boolean
                    }, index: number) =>  {
                        // completed 
                        if(isActive === "completed") {
                            return task.check&&<Todo 
                                task={task} 
                                key={index} 
                                index={index}
                                delOneTask={delOneTask}
                                editThisTask={editThisTask}
                                checking={checking}
                                unChecking={unChecking}
                            />
                        }

                        // uncompleted
                        if (isActive === "uncompleted") {
                            return !task.check&&<Todo 
                                task={task} 
                                key={index} 
                                index={index}
                                delOneTask={delOneTask}
                                editThisTask={editThisTask}
                                checking={checking}
                                unChecking={unChecking}
                            />
                        }

                        return <Todo 
                            task={task} 
                            key={index} 
                            index={index}
                            delOneTask={delOneTask}
                            editThisTask={editThisTask}
                            checking={checking}
                            unChecking={unChecking}
                        />
                    })
                }
            </ul>

            <button 
                className = {
                    allTasks.length > 2 ?
                        'del-all' :
                        'd-none'
                    }
                onClick = {dellAll}
            >
                Clear All
            </button>

            {/* there is no list  */}
            <p className={allTasks.length === 0 ? "no-tasks" : "d-none"}>
                Your list is clear!
            </p>
        </>
    )
}

export default ToDoList;