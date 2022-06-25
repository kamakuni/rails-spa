import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SingnUp';

function App() {
  return (
    <div className="wrapper">
      <h1>App</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<SignUp email={''} password={''} />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
