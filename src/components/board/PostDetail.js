// src/components/board/PostDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { posts } from '../../mockData';
import './PostDetail.css';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const postDetail = posts.find(p => p.id === parseInt(id));
    setPost(postDetail);
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="post-detail-container">
      <div className="post-header">
        <img src={post.image} alt={post.title} className="post-detail-image" />
        <h1>{post.title}</h1>
        <div className="post-meta">
          <span>{post.date}</span>
          <span>조회수 12 댓글 7</span>
        </div>
      </div>
      <div className="post-content">
        <p>{post.summary}</p>
        <p>{post.content}</p>
      </div>
      <div className="comments-section">
        <h2>댓글 2개</h2>
        <div className="comment-input">
          <input type="text" placeholder="댓글을 입력하세요." />
        </div>
        <div className="comments-list">
          <div className="comment-item">
            <span className="comment-user">페이스1</span>
            <span className="comment-date">2024.07.14</span>
            <p>정말 유용한 정보인데요??</p>
            <div className="comment-actions">
              <span>수정</span>
              <span>삭제</span>
            </div>
          </div>
          <div className="comment-item">
            <span className="comment-user">페이스2</span>
            <span className="comment-date">2024.07.14</span>
            <p>저에게 딱 맞는 이야기네요! 많이 도움 되었습니다. 앞으로도 이 방법을 자주 활용할 것 같아요.</p>
            <div className="comment-actions">
              <span>수정</span>
              <span>삭제</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
