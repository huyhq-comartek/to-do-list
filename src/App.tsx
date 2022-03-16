import './App.css';
import Input from './components/Input';
import Filter from './components/Filter';
import ToDoList from './components/ToDoList';
import { useState } from 'react';
import { toast } from 'react-toastify';
import React from 'react';
import { useCallback } from 'react';

interface Props {
    notify: (text: string, props: {}, type: string) => void
}
interface IEditTask{
  index: number;
  taskChanged: string
}

function App({notify}: Props) {
  // set state
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem('tasks') || '[]');
  });
  const [isEdit, setEdit] = useState<IEditTask>({
    index: -1,
    taskChanged: ''
  });
  const [isActive, setIsActive] = useState('all');
  
  const input: HTMLElement = document.querySelector('.head input')!;

  // set name of task
  const getInput = useCallback((text: string) => {
    // set name of new tasks
    if(isEdit.index === -1 && isEdit.taskChanged === '') {
      setTasks((prev: {
        text: string,
        check: boolean
      }[]) => {
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
    if(isEdit.index >= 0 && isEdit.taskChanged !== '') {
      setTasks((prev: {
        text: string,
        check: boolean
      }[]) => {
        prev[isEdit.index] = {...prev[isEdit.index], text};
        const newTask = [...prev]; 
        localStorage.setItem('tasks', JSON.stringify(newTask));
        return newTask;
      })

      setEdit({
        index: -1,
        taskChanged: ''
      });

      notify(
        'Update successfully', 
        {
          position: toast.POSITION.TOP_RIGHT, 
          autoClose: 3000
        }, 
        'success');
    }
  }, [notify, isEdit.index, isEdit.taskChanged])

  // Del task
  const handleDel = (index: number) => {
    setTasks((prev: number[]) => {
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
  const handleEdit = (index: number, nameTask: string) => {
    if(index >= 0) {
      setEdit({
        index,
        taskChanged: nameTask
      });
    }
    input.focus(); 
  }

  const all = useCallback(() => {
    setIsActive("all");
  }, [])

  const completed = useCallback(() => {
    setIsActive("completed");
  }, [])
  
  const uncompleted = useCallback(() => {
    setIsActive("uncompleted");
  }, [])

  const checking=(index: number) => {
    console.log(index);
    
    setTasks((prev: {
      text: string,
      check: boolean
    }[]) => {
      prev[index] = {...prev[index], check: true}
      localStorage.setItem('tasks', JSON.stringify([...prev]));
      return [...prev];
    })
  }

  const unChecking=(index: number) => {
    console.log(index);
    setTasks((prev: {
      text: string,
      check: boolean
    }[]) => {
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
        nameTask={isEdit.taskChanged}
        notify={notify}
      />

      <Filter 
        all={all} 
        completed={completed} 
        unCompleted={uncompleted} 
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
