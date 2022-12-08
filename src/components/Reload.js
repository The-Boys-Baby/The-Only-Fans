import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Reload = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/Checkout");
  }, []);
  return (
    <div>
      <div>
        <h3>One Moment Please...</h3>
      </div>
    </div>
  );
};

export default Reload;
