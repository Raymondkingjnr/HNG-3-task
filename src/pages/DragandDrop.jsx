import React from "react";
import ImageGrid from "../components/ImageGrid";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { BiImageAdd } from "react-icons/bi";
import NoUser from "../components/NoUser";
// import { logOutUser } from "../features/authSlice";
// import { AiOutlinePoweroff } from "react-icons/ai";

const DragandDrop = ({ handleDrop, handleDragOver, images }) => {
  const { user } = useSelector((state) => state.auth);
  //const dispatch = useDispatch();

  return (
    <main className="drop-page">
      <Link to="/log-in" className="log_in">
        log in
      </Link>
      <h1> Image Drag and Drop App</h1>
      <div onDrop={handleDrop} onDragOver={handleDragOver} className="drop-box">
        <BiImageAdd className="drop-icon" />
      </div>
      {user ? <ImageGrid images={images} /> : <NoUser />}

      {/* <button onClick={() => dispatch(logOutUser())}>
        <AiOutlinePoweroff />
      </button> */}
    </main>
  );
};

export default DragandDrop;
