import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// 경로를 실제 파일 위치에 맞게 수정
import MainContent from './components/main/MainContent'; 
import './components/main/MainContent.css'; 

// SignIn 컴포넌트 import
import SignIn from './components/Signin/SignIn'; 
import './components/Signin/SignIn.css'; 

import HeaderBeforeLogin from './components/main/HeaderBeforeLogin';
import Footer from './components/common/Footer';
import Board from './components/board/Board';
import CreatePost from './components/board/CreatePost';
import PostDetail from './components/board/PostDetail';
import SearchResults from './components/search/SearchResults';
import RecordPage from './components/record/RecordPage';
import RecordDetail from './components/record/RecordDetail';
import SignupPage from './components/signup/SignupPage'; 
import './components/signup/SignupPage.css';

const App = () => {
  return (
    <Router>
      <HeaderBeforeLogin /> {/* 로그인 전 헤더 */}
      
      <Routes>
        <Route path="/" element={<MainContent /> } />
        <Route path="/info" element={<Board />} />
        <Route path="/posts" element={<Board />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/posts/create" element={<CreatePost />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/record" element={<RecordPage />} />
        <Route path="/record/:date" element={<RecordDetail />} />
        <Route path="/signin" element={<SignIn />} /> {/* SignIn 컴포넌트 라우팅 */}
        <Route path="/signup" element={<SignupPage />} /> {/* SignupPage 컴포넌트 라우팅 */}
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;