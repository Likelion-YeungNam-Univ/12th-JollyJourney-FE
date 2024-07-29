import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Board from './components/board/Board';
import CategoryBoard from './components/board/CategoryBoard';
import CreatePost from './components/board/CreatePost';
import PostDetail from './components/board/PostDetail';
import SearchResults from './components/search/SearchResults'; // 추가
import RecordPage from './components/record/RecordPage'; // 추가
import RecordDetail from './components/record/RecordDetail'; // 추가
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
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/posts/create" element={<CreatePost />} />
        <Route path="/search" element={<SearchResults />} /> {/* 추가 */}
        <Route path="/record" element={<RecordPage />} /> {/* 추가 */}
        <Route path="/record/:date" element={<RecordDetail />} /> {/* 추가 */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
