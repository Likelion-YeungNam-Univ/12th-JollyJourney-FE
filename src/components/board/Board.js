import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight-words';
import './Board.css';
import Pagination from '../common/Pagination';
import { posts as mockPosts } from '../../mockData';
import searchIcon from '../../assets/images/search-icon.png';

const Board = () => {
  const [posts, setPosts] = useState(mockPosts);
  const [filteredPosts, setFilteredPosts] = useState(mockPosts);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    const keyword = searchKeyword.toLowerCase();
    const filtered = posts.filter(post => 
      post.title.toLowerCase().includes(keyword) || 
      post.summary.toLowerCase().includes(keyword) || 
      post.content.toLowerCase().includes(keyword)
    );
    setFilteredPosts(filtered);
    setCurrentPage(1); // 검색 후 첫 페이지로 이동
  }, [searchKeyword, posts]);

  const handleSearch = () => {
    const keyword = searchKeyword.toLowerCase();
    const filtered = posts.filter(post => 
      post.title.toLowerCase().includes(keyword) || 
      post.summary.toLowerCase().includes(keyword) || 
      post.content.toLowerCase().includes(keyword)
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
      <div className="board-header">
        <h1>육아 스트레스 정보</h1>
        <div className="search-container">
          <input 
            type="text" 
            placeholder="검색할 키워드를 입력하세요." 
            className="search-input"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>
            <img src={searchIcon} alt="Search" className="search-icon" />
          </button>
        </div>
      </div>
      <div className="post-list">
        {currentPosts.map(post => (
          <div key={post.id} className="post-item">
            <img src={post.image} alt="Post" className="post-image" />
            <div className="post-content">
              <h2>
                <Highlight
                  searchWords={[searchKeyword]}
                  textToHighlight={post.title}
                  highlightStyle={{ backgroundColor: 'transparent', color: '#86BD63' }}
                />
              </h2>
              <p>
                <Highlight
                  searchWords={[searchKeyword]}
                  textToHighlight={post.summary}
                  highlightStyle={{ backgroundColor: 'transparent', color: '#86BD63' }}
                />
              </p>
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
        totalPages={Math.ceil(filteredPosts.length / postsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Board;