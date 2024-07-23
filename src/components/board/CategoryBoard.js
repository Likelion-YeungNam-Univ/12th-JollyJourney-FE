// src/components/board/CategoryBoard.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './CategoryBoard.css';

const CategoryBoard = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    console.log(`Fetching post with id: ${id}`);
    fetch(`/api/posts/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log("Fetched post:", data);
        setPost(data);
      })
      .catch(error => console.error('Error fetching post:', error));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="category-board-container">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link to="/posts" className="back-to-list-btn">목록으로 돌아가기</Link>
    </div>
  );
};

export default CategoryBoard;
