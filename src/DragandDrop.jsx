import React from "react";
import ImageGrid from "./ImageGrid";

const DragandDrop = ({ handleDrop, handleDragOver, images }) => {
  return (
    <main>
      <h1>Image Drag and Drop App</h1>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{
          border: "2px dashed #ccc",
          borderRadius: "8px",
          padding: "20px",
        }}
      >
        Drag And drop here
      </div>
      <ImageGrid images={images} />
    </main>
  );
};

export default DragandDrop;
