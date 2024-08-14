import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './header'
import Home from './home'
import YourTask from './yourTask'

function App() {
  return (
    <BrowserRouter >
    <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/yourTask' element={<YourTask />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
