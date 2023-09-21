import { useState } from "react";
import "./App.css";
import DragandDrop from "./DragandDrop";
import ImageGrid from "./ImageGrid";

function App() {
  const [images, setImages] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);

    const newImages = files
      .filter((file) => file.type.startsWith("image/"))
      .map((file) => URL.createObjectURL(file));

    setImages([...images, ...newImages]);
  };

  console.log(images);

  const handleDragOver = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <DragandDrop
        handleDrop={handleDrop}
        handleDragOver={handleDragOver}
        images={images}
      />
    </>
  );
}

export default App;
