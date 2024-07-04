// import React from "react";
// import "./Box3.css";
// function Box3() {
//   return (
//     <div className="container3">
//       <div className="box-item3"></div>
//       <div className="box-item4"></div>
//     </div>
//   );
// }

// export default Box3;
import React from "react";
import "./Box3.css";

function PhotoCard({ title, imageSrc }) {
  return (
    <article className="photo-card">
      <h2 className="photo-card-title">{title}</h2>
      <img loading="lazy" src={imageSrc} alt={`${title} thumbnail`} className="photo-card-image" />
    </article>
  );
}

function Box3() {
  return (
    <section className="box3">
      <PhotoCard title="Photos" imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/f9dde7d4666b2f00a367d1a03b3fde61a23a6bbf5961d6df7ea6d56ac17f8a04?apiKey=be905fcf35c049c9b7bd0705582b940a&" />
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/21098689864171c92013e26d463a0dd090affb6b1b9ac5c7913a5b637417709a?apiKey=be905fcf35c049c9b7bd0705582b940a&" alt="Featured image" className="featured-image" />
    </section>
  );
}

export default Box3;

