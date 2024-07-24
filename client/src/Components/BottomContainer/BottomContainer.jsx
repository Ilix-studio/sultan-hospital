import React, { useState, useEffect } from "react";
import "./Box3.css";
import { Link } from "react-router-dom";

function PhotoCard({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const currentImage = images[currentImageIndex];

  return (
    <article className="photo-card">
      <h2 className="photo-card-title">Photos</h2>
      <img
        loading="lazy"
        src={currentImage}
        alt={`${"Photos"} thumbnail`}
        className="photo-card-image"
      />
    </article>
  );
}

function Box3() {
  const photos = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/f9dde7d4666b2f00a367d1a03b3fde61a23a6bbf5961d6df7ea6d56ac17f8a04?apiKey=be905fcf35c049c9b7bd0705582b940a&",
    "https://images.unsplash.com/photo-1720188228786-e6cb3b668aef?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1671512497536-e20cc1084ea7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <section className="box3">
      <PhotoCard images={photos} />
      <Link to="https://maps.app.goo.gl/jDSZx96mmoDJwQ9j8">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/21098689864171c92013e26d463a0dd090affb6b1b9ac5c7913a5b637417709a?apiKey=be905fcf35c049c9b7bd0705582b940a&"
          alt="Featured image"
          className="featured-image"
        />
      </Link>
    </section>
  );
}

export default Box3;
