import React, { useState, useMemo } from "react";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import BusinessCard from "./components/BusinessCard";
import { businesses, categories } from "./data";
import "./App.css";

export default function App() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    return businesses.filter((b) => {
      const matchesCategory =
        activeCategory === "All" || b.category === activeCategory;
      const matchesQuery =
        query.trim() === "" ||
        b.name.toLowerCase().includes(query.toLowerCase()) ||
        b.bio.toLowerCase().includes(query.toLowerCase()) ||
        b.category.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  // Featured listings float to the top
  const sorted = useMemo(
    () =>
      [...filtered].sort((a, b) => (b.featured === a.featured ? 0 : b.featured ? 1 : -1)),
    [filtered]
  );

  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <div className="brand">
            <span className="brand-mark">◎</span>
            <span className="brand-name">Karibu</span>
          </div>
          <p className="tagline">Find trusted businesses near you</p>
        </div>
      </header>

      <main className="main">
        <div className="search-section">
          <SearchBar value={query} onChange={setQuery} />
          <CategoryFilter
            categories={categories}
            active={activeCategory}
            onChange={setActiveCategory}
          />
        </div>

        <div className="results-meta">
          <span>{sorted.length} {sorted.length === 1 ? "business" : "businesses"} found</span>
        </div>

        {sorted.length === 0 ? (
          <div className="empty-state">
            <p className="empty-title">No matches yet</p>
            <p className="empty-desc">
              Try a different search term or category.
            </p>
          </div>
        ) : (
          <div className="card-grid">
            {sorted.map((b) => (
              <BusinessCard key={b.id} business={b} />
            ))}
          </div>
        )}
      </main>

      <footer className="footer">
        <p>List your business — coming soon</p>
      </footer>
    </div>
  );
}
