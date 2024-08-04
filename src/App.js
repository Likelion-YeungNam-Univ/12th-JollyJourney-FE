import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// 다른 컴포넌트들 import
import HeaderBeforeLogin from './components/main/HeaderBeforeLogin';
import ImageComponent from './components/main/ImageComponent';
import MainContent from './components/main/MainContent';
import Board from './components/board/Board';
import CreatePost from './components/board/CreatePost';
import PostDetail from './components/board/PostDetail';
import SearchResults from './components/search/SearchResults';
import RecordPage from './components/record/RecordPage';
import RecordDetail from './components/record/RecordDetail';
import Footer from './components/common/Footer';

// SignIn 컴포넌트 import
import SignIn from './components/Signin/SignIn'; 
import './components/Signin/SignIn.css'; 

// SignupPage 컴포넌트 import
import SignupPage from './components/signup/SignupPage'; 
import './components/signup/SignupPage.css';

const App = () => {
  return (
    <Router>
      <HeaderBeforeLogin /> {/* 로그인 전 헤더 */}
      
      <Routes>
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

      <MainContent /> {/* 메인 콘텐츠 추가 */}
      <ImageComponent /> {/* 이미지 컴포넌트 추가 */}
      
      <Footer />
    </Router>
  );
};

export default App;