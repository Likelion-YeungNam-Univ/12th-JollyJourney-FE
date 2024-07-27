// src/components/board/PostDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { posts } from '../../mockData';
import './PostDetail.css';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [editCommentId, setEditCommentId] = useState(null);
  const [editCommentText, setEditCommentText] = useState('');

  useEffect(() => {
    const postDetail = posts.find(p => p.id === parseInt(id));
    setPost(postDetail);
    // Initial comments - this could be fetched from an API
    setComments([
      { id: 1, user: '페이스1', date: '2024.07.14', text: '정말 유용한 정보인데요??' },
      { id: 2, user: '페이스2', date: '2024.07.14', text: '저에게 딱 맞는 이야기네요! 많이 도움 되었습니다. 앞으로도 이 방법을 자주 활용할 것 같아요.' }
    ]);
  }, [id]);

  const handleAddComment = () => {
    if (newComment.trim() === '') return;
    const newCommentObj = {
      id: comments.length + 1,
      user: '사용자', // This should be the logged-in user
      date: new Date().toISOString().split('T')[0],
      text: newComment
    };
    setComments([...comments, newCommentObj]);
    setNewComment('');
  };

  const handleEditComment = (id) => {
    const comment = comments.find(c => c.id === id);
    setEditCommentId(id);
    setEditCommentText(comment.text);
  };

  const handleUpdateComment = () => {
    setComments(comments.map(comment => 
      comment.id === editCommentId ? { ...comment, text: editCommentText } : comment
    ));
    setEditCommentId(null);
    setEditCommentText('');
  };

  const handleDeleteComment = (id) => {
    setComments(comments.filter(comment => comment.id !== id));
  };

  if (!post) return <p>Loading...</p>;

  return (
    <div className="post-detail-container">
      <div className="post-header">
        <img src={post.image} alt={post.title} className="post-detail-image" />
        <h1>{post.title}</h1>
        <div className="post-meta">
          <span>{post.date} <span className="post-author">by. {post.author}</span></span>
          <span>조회수 12 댓글 {comments.length}</span>
        </div>
      </div>
      <div className="post-content">
        <p>{post.summary}</p>
        <p>{post.content}</p>
      </div>
      <div className="comments-section">
        <h2>댓글 {comments.length}개</h2>
        <div className="comment-input">
          <input 
            type="text" 
            placeholder="댓글을 입력하세요." 
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button onClick={handleAddComment}>등록</button>
        </div>
        <div className="comments-list">
          {comments.map(comment => (
            <div key={comment.id} className="comment-item">
              <span className="comment-user">{comment.user}</span>
              <span className="comment-date">{comment.date}</span>
              {editCommentId === comment.id ? (
                <div className="edit-comment">
                  <input 
                    type="text" 
                    value={editCommentText}
                    onChange={(e) => setEditCommentText(e.target.value)}
                  />
                  <button onClick={handleUpdateComment}>저장</button>
                </div>
              ) : (
                <p>{comment.text}</p>
              )}
              <div className="comment-actions">
                <span onClick={() => handleEditComment(comment.id)}>수정</span>
                <span onClick={() => handleDeleteComment(comment.id)}>삭제</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
