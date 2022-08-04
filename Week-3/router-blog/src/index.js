import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import BlogPage from './BlogPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
      <Route index path='/home' element={<Home/>}/>
      <Route path='/:id' element={<BlogPage/>}/>
    </Routes>
  </BrowserRouter>
);