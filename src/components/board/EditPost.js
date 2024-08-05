import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditPost = () => {
  const { id } = useParams(); // URL에서 게시글 ID를 가져오기
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await axios.post(`http://your-api-url/api/posts/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        
      }
    } catch (error) {
      console.error('정보글 수정 실패:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목을 입력하세요"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="내용을 입력하세요"
      />
      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <button type="submit">수정하기</button>
    </form>
  );
};

export default EditPost;
