import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const About = (setAboutMe) => {
  const aboutLength = setAboutMe.aboutMe.split("").length;

  // console.log(setAboutMe.createUser());

  return (
    <div className="about">
      {setAboutMe.gender !== "" &&
      setAboutMe.firstName !== "" &&
      setAboutMe.lastName !== "" &&
      setAboutMe.birthday !== "" &&
      setAboutMe.picture !== "" &&
      setAboutMe.interest1 !== "" &&
      setAboutMe.interest2 !== "" &&
      setAboutMe.interest3 !== "" ? (
        <div className="about__container">
          <div className="goback__button">
            <Link to="/datingapp/signup/registration/interests">
              <FontAwesomeIcon icon={faAngleLeft} />
            </Link>
          </div>

          <div className="about__content">
            <div className="about__text-content">
              <h1 className="about__title">About you</h1>
              <p className="about__text">
                Please write at least 50 characters about you
              </p>
            </div>

            <form className="about__form">
              <textarea
                className="about__textarea"
                onChange={(event) => setAboutMe.setAboutMe(event.target.value)}
              />
              {aboutLength >= 50 ? (
                <Link
                  className="about__button-confirm"
                  onClick={setAboutMe.createUser()}
                  to="/datingapp/main"
                >
                  Confirm
                </Link>
              ) : (
                <button
                  className="about__button-confirm about__disabled"
                  style={{ opacity: 0.8 }}
                  disabled
                >
                  Confirm
                </button>
              )}
            </form>
          </div>
        </div>
      ) : (
        <div className="about__error">
          <p>You didn't fill in your data or choose a gender</p>
          <Link
            className="goback__button-link"
            to="/datingapp/signup/registration/interests"
          >
            Go back
          </Link>
        </div>
      )}
    </div>
  );
};

export default About;
