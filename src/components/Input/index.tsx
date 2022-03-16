import './input.css';
import React, { memo, useState } from 'react';
import { toast } from 'react-toastify';

interface Props {
  getInput: (text: string) => void,
  nameTask: string,
  notify: (text: string, props: {}, type: string) => void
}

function Input({getInput, nameTask, notify}: Props) {
  
  // set state
  const [txt, setTxt] = useState('');

  // handle submit
  const handleSubmit = (e: any) => {
    e.preventDefault();

    if(txt === '') {
      notify(
        'Please fill in the blank first!', 
        {
          position: toast.POSITION.TOP_RIGHT, 
          autoClose: 3000
        }, 
        'warning');
    } 
    
    else {
      getInput(txt);
      setTxt('');
      // alert('Add Successfully!');
    }
  }
  console.log('re-render');
  

  // render Input
  return (
    <form className="head" onSubmit={e => handleSubmit(e)}>
        <input 
          type="text" 
          placeholder="New Task"
          value={txt}
          onChange={e => { setTxt(e.target.value) }}
        />
        <button onSubmit={e => handleSubmit(e)} type="submit">
          { nameTask === '' ? "Add" : "Edit" }  
        </button>
    </form>

  );
}

export default memo(Input);