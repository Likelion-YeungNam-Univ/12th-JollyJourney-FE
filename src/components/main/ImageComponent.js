import React from 'react';
import './ImageComponent.css';

// 올바른 경로로 이미지 파일을 import
import imageFile from '../../assets/images/스크린샷 2024-07-31 오후 10.16.48.png'; // 경로를 맞게 수정하세요.

const ImageComponent = () => {
  return (
    <div className="image-container">
      <img src={imageFile} alt="Jolly Journey" />
    </div>
  );
};

export default ImageComponent;
