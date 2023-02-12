import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Interests = ({
  gender,
  firstName,
  lastName,
  birthday,
  picture,
  setInterest1,
  setInterest2,
  setInterest3,
  interest1,
  interest2,
  interest3,
}) => {
  return (
    <div className="interests">
      {gender !== "" &&
      firstName !== "" &&
      lastName !== "" &&
      birthday !== "" &&
      picture !== "" ? (
        <div className="interests__container">
          <div className="goback__button">
            <Link to="/datingapp/signup/registration/details">
              <FontAwesomeIcon icon={faAngleLeft} />
            </Link>
          </div>

          <div className="interests__text">
            <h1 className="interests__title">Your Interests</h1>
            <p className="interests__text">
              Select a few of your interests and let everyone know what you’re
              passionate about.
            </p>
          </div>
        </div>
      ) : (
        <div className="interest__error">
          <p>You didn't fill in your data or choose a gender</p>
          <Link
            className="goback__button-link"
            to="/datingapp/signup/registration/gender"
          >
            Go back
          </Link>
        </div>
      )}
    </div>
  );
};

export default Interests;
