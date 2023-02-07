import React from "react";
import { Link } from "react-router-dom";
import camera from "../../../images/details/camera.png";

const Details = () => {
  const getInputEmail = localStorage.getItem("savedEmail");

  return (
    <div className="details">
      {getInputEmail !== "" ? (
        <div className="details__content">
          <h1>Profile details</h1>

          <form className="details__form">
            <img className="details__photo" src={camera} alt="select picture" />
            <div className="input__container">
              <input type="text" name="name" required />
              <label htmlFor="name">Name</label>
            </div>

            <div className="input__container">
              <input type="text" name="lastname" required />
              <label htmlFor="lastname">Last Name</label>
            </div>

            <input type="date" name="date" required />
          </form>

          <button className="registration__button details__button">
            Confirm
          </button>
        </div>
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
