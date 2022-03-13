import './style.css';
import Todo from './Todo';

function ToDoList({
    allTasks, 
    handleDel, 
    handleEdit, 
    unChecking, 
    checking, 
    isActive, 
    dellAll
}) {

    // Del task
    const delOneTask = (index) => {
        handleDel(index);
    }

    // Edit task 
    const editThisTask = (index, nameTask) => {
        handleEdit(index, nameTask)
    }

    // render 
    return (
        <>
            {/* todo list  */}
            <ul className="task-wrapper">
                {
                    allTasks.map((task, index) =>  {
                        // completed 
                        if(isActive === "completed") {
                            return task.check&&<Todo 
                                nameTask={task} 
                                key={index} 
                                index={index}
                                delOneTask={delOneTask}
                                editThisTask={editThisTask}
                                getState={[checking, unChecking]}
                            />
                        }

                        // uncompleted
                        if (isActive === "uncompleted") {
                            return !task.check&&<Todo 
                                nameTask={task} 
                                key={index} 
                                index={index}
                                delOneTask={delOneTask}
                                editThisTask={editThisTask}
                                getState={[checking, unChecking]}
                            />
                        }

                        return <Todo 
                            nameTask={task} 
                            key={index} 
                            index={index}
                            delOneTask={delOneTask}
                            editThisTask={editThisTask}
                            getState={[checking, unChecking]}
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