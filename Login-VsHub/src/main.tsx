import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Header from './components/Header';
import Home from './pages/Home';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='Login' element = { <Login/> }/>
        <Route path='Home' element = { <Home/> }/>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
)
