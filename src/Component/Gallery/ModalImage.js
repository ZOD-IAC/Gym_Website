import React, { useState } from "react";
import { gsap } from "gsap";

const ModalImage = ({ images }) => {
  return (
    <div className="image-gallery">
      <h2 className="gallery-title">Gallery</h2>
      <div className="gallery-grid">
        {images.map((image, idx) => (
          <img
            key={idx}
            src={image}
            alt={`Gallery ${idx + 1}`}
            className="gallery-image"
            onClick={() => openModal(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default ModalImage;
