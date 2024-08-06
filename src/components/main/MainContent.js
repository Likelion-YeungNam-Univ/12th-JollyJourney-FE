import React, { useState } from 'react';
import './MainContent.css';

// 올바른 경로로 이미지 파일을 import
import imageFile from '../../assets/images/스크린샷 2024-07-31 오후 10.16.48.png'; // 경로를 맞게 수정하세요.
import image1 from '../../assets/images/KakaoTalk_Photo_2024-08-04-23-53-25.png';

const images = [
  image1,
  image1,
  image1,
  image1,
];

const ImageComponent = () => {
  return (
    <div className="image-container">
      <img src={imageFile} alt="Jolly Journey" />
    </div>
  );
};

function MainContent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <main className="main-content">
        <div className="slider">
          <button className="prev" onClick={prevSlide}>{"<"}</button>
          <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
          <button className="next" onClick={nextSlide}>{">"}</button>
        </div>
      </main>
      <ImageComponent /> {/* ImageComponent가 MainContent 아래에 위치합니다. */}
    </div>
  );
}

export default MainContent;
