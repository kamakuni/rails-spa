import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import { NavLink } from 'react-router-dom';
import ProtectedRoutes from './features/auth/ProtectedRoutes';
import { useAppDispatch, useAppSelector } from './store';
import { Link } from 'react-router-dom';
import Logout from './components/Logout/Login';

function App() {

  const dispatch = useAppDispatch()
  const { isSuccess, isAuthenticated } = useAppSelector((state) => state.auth)

  return (
    <div className="wrapper">
      <h1>App</h1>
      <BrowserRouter>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          {
            isAuthenticated ? <NavLink to="/logout">Logout</NavLink>
              : <NavLink to="/login">Login</NavLink>
          }
          <NavLink to="/signup">SignUp</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route element={<ProtectedRoutes />} >
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div >
  );

}

export default App;
