import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight-words';
import './Board.css';
import Pagination from '../common/Pagination';
import searchIcon from '../../assets/images/search-icon.png';
import axios from 'axios';

const Board = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    // API 호출
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://13.125.25.162:8080/journals');
        const data = response.data.map(post => ({
          ...post,
          imageUrl: 'https://jollyjourney-s3-bucket.s3.ap-northeast-2.amazonaws.com/1722786183492_%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2024-07-13+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+2.03.26.png' // 이미지 URL 추가
        }));
        setPosts(data);
        setFilteredPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const keyword = searchKeyword.toLowerCase();
    const filtered = posts.filter(post => 
      post.title.toLowerCase().includes(keyword) || 
      (post.summary && post.summary.toLowerCase().includes(keyword)) || 
      post.content.toLowerCase().includes(keyword)
    );
    setFilteredPosts(filtered);
    setCurrentPage(1); // 검색 후 첫 페이지로 이동
  }, [searchKeyword, posts]);

  const handleSearch = () => {
    const keyword = searchKeyword.toLowerCase();
    const filtered = posts.filter(post => 
      post.title.toLowerCase().includes(keyword) || 
      (post.summary && post.summary.toLowerCase().includes(keyword)) || 
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
          <div key={post.journalId} className="post-item">
            <Link to={`/posts/${post.journalId}`}>
              <img src={post.imageUrl || '/default-image.png'} alt="Post" className="post-image" />
            </Link>
            <div className="post-content">
              <h2>
                <Link to={`/posts/${post.journalId}`} className="post-link">
                  <Highlight
                    searchWords={[searchKeyword]}
                    textToHighlight={post.title}
                    highlightStyle={{ backgroundColor: 'transparent', color: '#86BD63' }}
                  />
                </Link>
              </h2>
              <p>
                <Link to={`/posts/${post.journalId}`} className="post-link">
                  <Highlight
                    searchWords={[searchKeyword]}
                    textToHighlight={post.content}
                    highlightStyle={{ backgroundColor: 'transparent', color: '#86BD63' }}
                  />
                </Link>
              </p>
              <p className="post-date">
                {new Date(post.createDate).toLocaleDateString()} <span className="post-author">by. {post.author || 'Anonymous'}</span>
              </p>
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
