import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} >
        </Route>
        <Route path="to-do-list" element={<App />} />
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
