import React, { useState } from 'react';
import './MainContent.css';

// MainContent에서 ImageComponent를 사용하지 않음으로써 중복을 피함
import image1 from '../../assets/images/IMG_8642 2.PNG';

const images = [
  image1,
  image1,
  image1,
  image1,
];

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
    </div>
  );
}

export default MainContent;
