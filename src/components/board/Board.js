// src/components/board/Board.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Board.css';

const Board = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("Fetching posts...");
    fetch('/api/posts')
      .then(response => response.json())
      .then(data => {
        console.log("Fetched posts:", data);
        setPosts(data);
      })
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div className="board-container">
      <h1>육아 스트레스 해소 Tip</h1>
      <div className="search-container">
        <input type="text" placeholder="검색할 키워드를 입력하세요." className="search-input" />
        <button className="search-button">+</button>
      </div>
      <div className="post-list">
        {posts.map(post => (
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
      <div className="pagination">
        <span className="pagination-item active">1</span>
        <span className="pagination-item">2</span>
        <span className="pagination-item">3</span>
      </div>
    </div>
  );
};

export default Board;
