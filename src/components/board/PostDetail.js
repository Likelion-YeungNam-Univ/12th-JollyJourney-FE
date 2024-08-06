import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import emptyHeart from '../../assets/images/empty-heart.png';
import filledHeart from '../../assets/images/filled-heart.png';
import registerIcon from '../../assets/images/register-icon.png'; // 로컬 이미지 파일 추가
import './PostDetail.css';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [editCommentId, setEditCommentId] = useState(null);
  const [editCommentText, setEditCommentText] = useState('');
  const [isComposing, setIsComposing] = useState(false);
  // 현재 사용자 정보 (예시)
  const currentUser = '사용자';

  useEffect(() => {
    // API를 통해 게시물 상세 정보 가져오기
    const fetchPostDetail = async () => {
      try {
        const response = await axios.get(`http://13.125.25.162:8080/journals/${id}`);
        setPost(response.data);
        // 댓글 정보도 서버로부터 가져온다고 가정
        setComments([
          { id: 1, user: '페이스1', date: '2024.07.14', text: '정말 유용한 정보인데요??', likes: 2, liked: false },
          { id: 2, user: '페이스2', date: '2024.07.14', text: '저에게 딱 맞는 이야기네요! 많이 도움 되었습니다. 앞으로도 이 방법을 자주 활용할 것 같아요.', likes: 3, liked: false },
          { id: 3, user: '사용자', date: '2024.07.14', text: '제가 작성한 댓글입니다.', likes: 0, liked: false }
        ]);
      } catch (error) {
        console.error('Failed to fetch post detail', error);
      }
    };

    fetchPostDetail();
  }, [id]);

  const handleAddComment = () => {
    if (newComment.trim() === '') return;
    const newCommentObj = {
      id: comments.length + 1,
      user: currentUser,
      date: new Date().toISOString().split('T')[0],
      text: newComment,
      likes: 0,
      liked: false
    };
    setComments([...comments, newCommentObj]);
    setNewComment('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey && !isComposing) {
      e.preventDefault();
      handleAddComment();
    }
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

  const toggleLike = (id) => {
    setComments(comments.map(comment =>
      comment.id === id ? { ...comment, liked: !comment.liked, likes: comment.liked ? comment.likes - 1 : comment.likes + 1 } : comment
    ));
  };

  if (!post) return <p>Loading...</p>;

  return (
    <div className="post-detail-container">
      <div className="post-header">
        <img src={post.imageUrl} alt={post.title} className="post-detail-image" />
        <h1>{post.title}</h1>
        <div className="post-meta">
          <span className="post-date">{new Date(post.createDate).toLocaleDateString()}</span>
          <div className="post-stats">
            <span>조회수 {post.Count}</span>
            <span>댓글 {post.commentCount}</span>
          </div>
        </div>
      </div>
      <div className="post-content">
        {post.content.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className="comments-section">
        <h2>댓글 {comments.length}개</h2>
        <div className="comment-input">
          <textarea
            placeholder="댓글을 입력하세요."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            onKeyDown={handleKeyDown}
            onCompositionStart={() => setIsComposing(true)}
            onCompositionEnd={() => setIsComposing(false)}
            rows="3"
          />
          <button onClick={handleAddComment} className="comment-submit-button">
            <img src={registerIcon} alt="등록" />
          </button>
        </div>
        <div className="comments-list">
          {comments.map(comment => (
            <div key={comment.id} className="comment-item">
              <div className="comment-content">
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
                <div className="comment-likes">
                  <img
                    src={comment.liked ? filledHeart : emptyHeart}
                    alt="like"
                    className="like-icon"
                    onClick={() => toggleLike(comment.id)}
                  />
                  <span>{comment.likes}</span>
                </div>
              </div>
              {comment.user === currentUser && (
                <div className="comment-actions">
                  <span className="edit" onClick={() => handleEditComment(comment.id)}>수정</span>
                  <span className="delete" onClick={() => handleDeleteComment(comment.id)}>삭제</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
