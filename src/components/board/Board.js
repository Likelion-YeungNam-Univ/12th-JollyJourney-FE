// src/components/board/Board.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../common/Pagination';
import './Board.css';
import searchIcon from '../../assets/images/search-icon.png';

const Board = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    console.log("Fetching posts...");
    fetch('/api/posts')
      .then(response => response.json())
      .then(data => {
        console.log("Fetched posts:", data);
        setPosts(data);
        setFilteredPosts(data); // 초기에는 모든 게시글을 표시
      })
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  const handleSearch = () => {
    const filtered = posts.filter(post => 
      post.title.includes(searchTerm) || post.summary.includes(searchTerm)
    );
    setFilteredPosts(filtered);
    setCurrentPage(1); // 검색 후 첫 페이지로 이동
  };

  // Calculate the displayed posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

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
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
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
              <Link to={`/posts/${post.id}`}>자세히 보기</Link>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredPosts.length / postsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Board;
