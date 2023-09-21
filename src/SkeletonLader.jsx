import React from "react";

const SkeletonLader = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {[1, 2, 3, 4].map((index) => (
        <div
          key={index}
          style={{ margin: "8px", width: "150px", textAlign: "center" }}
          className="heartbeat"
        >
          <div
            style={{
              width: "100%",
              height: "100px",
              backgroundColor: "#ebebeb",
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLader;
