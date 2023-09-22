import React, { useState } from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const LogPage = () => {
  const [showPage, setShowPage] = useState(false);

  return (
    <div className="sign-container">
      {showPage ? <SignIn /> : <SignUp />}

      <button onClick={() => setShowPage(!showPage)} className="sign-in_toggle">
        {showPage ? "" : ""}
      </button>
    </div>
  );
};

export default LogPage;
