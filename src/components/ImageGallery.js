// src/components/ImageGallery.js
import React from 'react';

const ImageGallery = ({ galleryImages }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '20px' }}>
      {galleryImages.map((img, index) => (
        <img key={index} src={img} alt={`gallery-${index}`} style={{ width: '45%', borderRadius: '8px' }} />
      ))}
    </div>
  );
};

export default ImageGallery;
