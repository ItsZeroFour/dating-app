import React, { useState } from "react";
import { Link } from "react-router-dom";
import camera from "../../../images/details/camera.png";

const Details = () => {
  const getInputEmail = localStorage.getItem("savedEmail");
  const [date, setDate] = useState("");

  return (
    <div className="details">
      {getInputEmail !== "" ? (
        <div className="details__content">
          <h1>Profile details</h1>

          <input className="detailt__avatar-input" type="file" id="file" />
          <label className="detailt__avatar-label" htmlFor="file">
            <img className="details__photo" src={camera} alt="select picture" />
          </label>

          <form className="details__form">
            <div className="input__container">
              <input type="text" id="name" required />
              <label htmlFor="name">Name</label>
            </div>

            <div className="input__container">
              <input type="text" id="lastname" required />
              <label htmlFor="lastname">Last Name</label>
            </div>

            <input
              type="date"
              name="date"
              required
              onChange={(event) => setDate(event.target.value)}
            />
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
