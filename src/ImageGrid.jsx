import React from "react";
import SkeletonLader from "./SkeletonLader";

const ImageGrid = ({ images }) => {
  if (images.length === 0) {
    return <SkeletonLader />;
  }
  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {images.map((image, index) => (
          <div
            key={index}
            style={{ margin: "8px", width: "150px", textAlign: "center" }}
          >
            <img
              src={image}
              alt={`Uploaded ${index}`}
              style={{ maxWidth: "100%", maxHeight: "100px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
