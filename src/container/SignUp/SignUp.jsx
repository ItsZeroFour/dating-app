import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/signup/icon.svg";
import googleIcon from "../../images/signup/google.svg";

const SignUp = () => {
  return (
    <div className="signup">
      <div className="signup__content">
        <div className="signup__top-content">
          <img src={logo} alt="logo" />
          <h1>Sign up to continue</h1>
        </div>

        <div className="signup__button-content">
          <Link className="registration__button" to="/datingapp/signup/registration">
            Continue with email
          </Link>
        </div>

        <div className="signup__button-alternative">
          <div className="signup__button-alternative-title">
            <div className="dash"></div>
            <p>or sign up with</p>
            <div className="dash"></div>
          </div>

          <div className="signup__button">
            <button>
              <img src={googleIcon} alt="google" />
            </button>
          </div>
        </div>

        <footer className="signup__footer">
          <p>Terms of use</p>
          <p>Privacy Policy</p>
        </footer>
      </div>
    </div>
  );
};

export default SignUp;
