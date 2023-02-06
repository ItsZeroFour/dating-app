import React from "react";
import preloader from "../../images/preloader/preloader.gif";

const Preloader = () => {
  return (
    <div className="preloader">
      <img src={preloader} alt="loading..." />
    </div>
  );
};

export default Preloader;
