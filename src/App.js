// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Board from './components/board/Board';
import CategoryBoard from './components/board/CategoryBoard';
import CreatePost from './components/board/CreatePost';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="/info" element={<Board />} />
        <Route path="/posts" element={<Board />} />
        <Route path="/posts/:id" element={<CategoryBoard />} />
        <Route path="/posts/create" element={<CreatePost />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
