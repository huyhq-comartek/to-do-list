import './App.css';
import Input from './components/Input';
import Filter from './components/Filter';
import ToDoList from './components/ToDoList';
import { useState } from 'react';

function App() {
  // set state
  const [tasks, setTasks] = useState([]);
  const [isEdit, setEdit] = useState([-1, '']);
  const [filter, setFilter] = useState('all');

  const input = document.querySelector('.head input');

  // set name of task
  const inputRec = (text) => {
    // set name of new tasks
    if(isEdit[0] === -1 && isEdit[1] === '') {
      setTasks((prev) => [...prev, text])
    }

    // edit name of task
    if(isEdit[0] >= 0 && isEdit[1] !== '') {
      setTasks((prev) => {
        prev.splice(isEdit[0], 1, text);
        return prev;
      })
      setEdit([-1, '']);
    }
  }

  // Del task
  const handleDel = (index) => {
    setTasks((prev) => {
      const newTask = [...prev];
      newTask.splice(index, 1);
      return newTask;
    })
  }

  // Edit task 
  const handleEdit = (index, nameTask) => {
    if(index >= 0) {
      setEdit([index, nameTask]);
    }
    input.focus(); 
  }

  // get  status of list task
  const getListStatus = (state) => {
    setFilter(state)
  }

  const filteredTask = (doneTaskArr) => {
    console.log(doneTaskArr, filter);
  }

  // render
  return (
    <div className="App container">
      <Input getInput={inputRec} nameTask={isEdit[1]}/>
      <Filter getBtn={getListStatus}/>
      <ToDoList 
        allTasks={tasks} 
        handleDel={handleDel}
        handleEdit={handleEdit}
        doneTask={filteredTask}
      />
    </div>
  );
}

export default App;
