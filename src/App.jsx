import { useState } from "react";
import "./App.css";
import DragandDrop from "./pages/DragandDrop";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogPage from "./pages/LogPage";

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
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <DragandDrop
                handleDrop={handleDrop}
                handleDragOver={handleDragOver}
                images={images}
              />
            }
          />
          <Route path="/log-in" element={<LogPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
