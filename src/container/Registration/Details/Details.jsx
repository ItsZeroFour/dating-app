import React from "react";
import { Link } from "react-router-dom";

const Details = () => {
  const getInputEmail = localStorage.getItem("savedEmail");

  return (
    <div className="details">
      {getInputEmail !== "" ? (
        <div className="details__content"></div>
      ) : (
        <div className="details__error">
          <p>Sorry, but you don`t verify your email adress</p>
          <div style={{ marginTop: "3rem" }}>
            <Link
              className="detailt__back-link"
              to="/datingapp/signup/registration"
            >
              Go back
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
