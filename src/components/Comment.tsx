import React from "react";

interface Props {
  image: string;
  name: string;
  role: string;
  quote: string;
  rate: number;
}

const Comment = ({ image, name, role, quote, rate }: Props) => {
  // Create an array for filled stars based on the rate
  const filledStars = Array(rate).fill(<i className="bi bi-star-fill"></i>);
  // Create an array for unfilled stars based on the remainder (assuming a total of 5 stars)
  const unfilledStars = Array(5 - rate).fill(<i className="bi bi-star"></i>);

  return (
    <div className="swiper-slide">
      <div className="testimonial-wrap">
        <div className="testimonial-item">
          <img src={image} className="testimonial-img" alt={name} />
          <h3>{name}</h3>
          <h4>{role}</h4>
          <div className="stars">
            {/* Render filled stars */}
            {filledStars.map((star, index) => (
              <React.Fragment key={`filled-${index}`}>{star}</React.Fragment>
            ))}
            {/* Render unfilled stars */}
            {unfilledStars.map((star, index) => (
              <React.Fragment key={`unfilled-${index}`}>{star}</React.Fragment>
            ))}
          </div>
          <p>
            <i className="bi bi-quote quote-icon-left"></i>
            <span>{quote}</span>
            <i className="bi bi-quote quote-icon-right"></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
