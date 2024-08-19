import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './header'
import Home from './home'
import YourTask from './yourTask'
import Login from './components/login';
import Signup from './components/signup';

function App() {
  return (
    <BrowserRouter >
    <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/yourTask' element={<YourTask />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
