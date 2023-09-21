import React from "react";
import SkeletonLader from "./SkeletonLader";
import { motion } from "framer-motion";

const ImageGrid = ({ images }) => {
  if (images.length === 0) {
    return <SkeletonLader />;
  }
  return (
    <div>
      <div className="image-holder">
        {images.map((image, index) => {
          return (
            <motion.div
              className="image-container"
              key={index}
              whileHover={{ opacity: 1 }}
              layout
            >
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                src={image}
                alt={`Uploaded ${index}`}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageGrid;
