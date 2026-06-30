import React from "react";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <span className="search-icon" aria-hidden="true">⌕</span>
      <input
        type="text"
        className="search-input"
        placeholder="Search businesses, services, or categories..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search businesses"
      />
      {value && (
        <button
          className="search-clear"
          onClick={() => onChange("")}
          aria-label="Clear search"
        >
          ×
        </button>
      )}
    </div>
  );
}
