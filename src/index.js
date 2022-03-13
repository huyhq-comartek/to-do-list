import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

toast.configure();

const notify = (text, props, type) => {
  if (type === '' || type === 'undefined') {
    toast(text, props);
  } else {
    toast[type](text, props);
  }
}

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="to-do-list" element={<Login notify={notify}/>} >
        </Route>
        <Route path="/" element={<App notify={notify}/>} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Main/>
  </React.StrictMode>,
  document.getElementById('root')
);
