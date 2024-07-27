// src/components/board/Board.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Board.css';
import Pagination from '../common/Pagination';
import { posts } from '../../mockData';
import searchIcon from '../../assets/images/search-icon.png';

const Board = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const handleSearch = () => {
    // 검색 기능 구현
  };

  // Calculate the displayed posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="board-container">
      <h1>육아 스트레스 해소 Tip</h1>
      <div className="search-container">
        <input 
          type="text" 
          placeholder="검색할 키워드를 입력하세요." 
          className="search-input" 
        />
        <button className="search-button" onClick={handleSearch}>
          <img src={searchIcon} alt="Search" className="search-icon" />
        </button>
      </div>
      <div className="post-list">
        {currentPosts.map(post => (
          <div key={post.id} className="post-item">
            <img src={post.image} alt="Post" className="post-image" />
            <div className="post-content">
              <h2>{post.title}</h2>
              <p>{post.summary}</p>
              <p className="post-date">
                {post.date} <span className="post-author">by. {post.author}</span>
              </p>
              <Link to={`/posts/${post.id}`}>자세히 보기</Link>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(posts.length / postsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Board;