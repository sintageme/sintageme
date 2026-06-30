import React from "react";

export default function BusinessCard({ business }) {
  const { name, category, bio, rating, reviewCount, location, featured } = business;

  return (
    <article className={`business-card ${featured ? "business-card-featured" : ""}`}>
      {featured && <span className="featured-badge">Featured</span>}
      <div className="card-top">
        <h3 className="business-name">{name}</h3>
        <span className="business-category">{category}</span>
      </div>
      <p className="business-bio">{bio}</p>
      <div className="card-bottom">
        <div className="rating">
          <span className="rating-stars" aria-hidden="true">★</span>
          <span className="rating-value">{rating.toFixed(1)}</span>
          <span className="rating-count">({reviewCount})</span>
        </div>
        <span className="business-location">{location}</span>
      </div>
    </article>
  );
}
