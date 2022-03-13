import './App.css';
import Input from './components/Input';
import Filter from './components/Filter';
import ToDoList from './components/ToDoList';
import { useState } from 'react';
import { toast } from 'react-toastify';

function App({notify}) {
  // set state
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem('tasks')) ?? [];
  });
  const [isEdit, setEdit] = useState([-1, '']);
  const [isActive, setIsActive] = useState('all');
  
  const input = document.querySelector('.head input');

  // set name of task
  const getInput = (text) => {
    // set name of new tasks
    if(isEdit[0] === -1 && isEdit[1] === '') {
      setTasks((prev) => {
        const newTask = [...prev, {text, check: false}];
        localStorage.setItem('tasks', JSON.stringify(newTask));
        return newTask;
      })

      notify(
        'Add successfully', 
        {
          position: toast.POSITION.TOP_RIGHT, 
          autoClose: 3000
        }, 
        'success');
    }

    // edit name of task
    if(isEdit[0] >= 0 && isEdit[1] !== '') {
      setTasks((prev) => {
        prev[isEdit[0]]={...prev[isEdit[0]], text};
        const newTask = [...prev]; 
        localStorage.setItem('tasks', JSON.stringify(newTask));
        return newTask;
      })

      setEdit([-1, '']);

      notify(
        'Update successfully', 
        {
          position: toast.POSITION.TOP_RIGHT, 
          autoClose: 3000
        }, 
        'success');
    }
  }

  // Del task
  const handleDel = (index) => {
    setTasks((prev) => {
      const newTask = [...prev];
      newTask.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(newTask));
      return newTask;
    })

    notify(
      'Delete successfully', 
      {
        position: toast.POSITION.TOP_RIGHT, 
        autoClose: 3000
      }, 
      'success');
  }

  // Del all task
  const dellAll = () => {
    setTasks([]);

    localStorage.removeItem('tasks');

    notify(
      'All tasks have been deleted', 
      {
        position: toast.POSITION.TOP_RIGHT, 
        autoClose: 3000
      }, 
      'success');
  }

  // Edit task 
  const handleEdit = (index, nameTask) => {
    if(index >= 0) {
      setEdit([index, nameTask]);
    }
    input.focus(); 
  }

  const all = () => {
    setIsActive("all");
  }

  const completed = () => {
    setIsActive("completed");
  }
  
  const uncompleted = () => {
    setIsActive("uncompleted");
  }

  const checking=(index) => {
    setTasks((prev) => {
      prev[index] = {...prev[index], check: true}
      localStorage.setItem('tasks', JSON.stringify([...prev]));
      return [...prev];
    })
  }

  const unChecking=(index) => {
    setTasks((prev) => {
      prev[index] = {...prev[index], check: false};
      localStorage.setItem('tasks', JSON.stringify([...prev]));
      return [...prev];
    })
  }

  // render
  return (
    <div className="App container">
      <Input 
        getInput={getInput} 
        nameTask={isEdit[1]}
        notify={notify}
      />

      <Filter 
        all={all} 
        completed={completed} 
        uncompleted={uncompleted} 
        isActive={isActive} 
      />

      <ToDoList 
        allTasks={tasks} 
        handleDel={handleDel}
        handleEdit={handleEdit}
        isActive={isActive}
        checking={checking}
        unChecking={unChecking}
        dellAll={dellAll}
      />
    </div>
  );
}

export default App;
