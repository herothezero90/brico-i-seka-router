import React from 'react';
import './MainImage.css';

const MainImage = ({ src, alt }) => {
  return (
    <div className="main-image-container">
      <img src={src} alt={alt} className="main-image" />
    </div>
  );
};

export default MainImage;