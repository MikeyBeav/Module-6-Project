import React from "react";
import "../../index.css";

const SkeletonCard = () => (
  <div
    className="skeleton"
    style={{
      padding: "1.5rem",
      borderRadius: "1rem",
      background: "#fff",
      boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
      marginBottom: "2rem",
    }}
  >
    <div className="skeleton skeleton-image" />
    <div className="skeleton skeleton-title" />
    <div className="skeleton skeleton-line" />
    <div className="skeleton skeleton-line" />
    <div className="skeleton skeleton-line" style={{ width: "70%" }} />
  </div>
);

export default SkeletonCard;
