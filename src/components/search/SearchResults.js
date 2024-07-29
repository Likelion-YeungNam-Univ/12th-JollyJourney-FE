// src/components/search/SearchResults.js
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Highlight from 'react-highlight-words';
import { posts } from '../../mockData';
import './SearchResults.css';

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  const filteredPosts = posts.filter(
    post =>
      post.title.includes(query) || post.content.includes(query) || post.summary.includes(query)
  );

  return (
    <div className="search-results-container">
      <h1>검색 결과</h1>
      <div className="post-list">
        {filteredPosts.length > 0 ? (
          filteredPosts.map(post => (
            <div key={post.id} className="post-item">
              <img src={post.image} alt="Post" className="post-image" />
              <div className="post-content">
                <h2>
                  <Highlight
                    searchWords={[query]}
                    textToHighlight={post.title}
                    highlightStyle={{ backgroundColor: 'transparent', color: '#86BD63' }}
                  />
                </h2>
                <p>
                  <Highlight
                    searchWords={[query]}
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
          ))
        ) : (
          <p>검색 결과가 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
