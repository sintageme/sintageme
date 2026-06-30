import React from "react";

export default function CategoryFilter({ categories, active, onChange }) {
  return (
    <div className="category-filter" role="tablist" aria-label="Filter by category">
      {categories.map((cat) => (
        <button
          key={cat}
          role="tab"
          aria-selected={active === cat}
          className={`category-pill ${active === cat ? "category-pill-active" : ""}`}
          onClick={() => onChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
