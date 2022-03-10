import './input.css';
import React, { useState } from 'react';

function Input({getInput, nameTask}) {
  
  // set state
  const [txt, setTxt] = useState('');

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if(txt === '') {
      alert('Please enter your task first!');
    } 
    
    else {
      getInput(txt);
      setTxt('');
      // alert('Add Successfully!');
    }
  }

  // render Input
  return (
    <form className="head" onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="New Task"
          // onFocus={() => { setTxt(nameTask) }}
          value={txt}
          onChange={(e) => { setTxt(e.target.value) }}
        />
        <button onSubmit={handleSubmit} type="submit">
          { nameTask === '' ? "Add" : "Edit" }  
        </button>
    </form>

  );
}

export default Input;