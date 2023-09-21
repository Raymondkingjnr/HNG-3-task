import React from "react";

const SkeletonLader = () => {
  return (
    <div className="skeleton-loader">
      {[1, 2, 3, 4].map((index) => (
        <div key={index} className="heartbeat skeleton-container">
          <div className="skeleton"></div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLader;
