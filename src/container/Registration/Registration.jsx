import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { dbcode } from "../../firebase/firebase-config-codeverify";
import { figures } from "../../data/codeFigures.js";
import emailjs from "@emailjs/browser";

const Registration = ({ setInputValue, inputValue }) => {
  const [disabled, setDisabled] = useState(true);
  const [newCode, setNewCode] = useState(0);
  const codeCollectionsRef = collection(dbcode, "codeverify");
  const form = useRef();

  // Email validator
  const emailValidation = (event) => {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{1,3}$/;
    setInputValue(event.target.value);
    if (inputValue.match(pattern)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  // Create random code generator
  useEffect(() => {
    let randomCode = "";

    for (let i = 0; i < 4; i++) {
      const randomFigures = Math.floor(Math.random() * figures.length);
      randomCode += figures[randomFigures];
    }

    setNewCode(+randomCode);
  }, []);


  const sendAndAddCode = async (event) => {
    event.preventDefault();

    // Send code to firebase and user email
    if (newCode !== 0) {
      addDoc(codeCollectionsRef, { code: newCode, email: inputValue });

      emailjs
        .sendForm(
          "service_of6uxmc",
          "template_kcrn6mh",
          form.current,
          "Bte1EjapjDkuVt8Kb"
        )
        .then(
          () => {
            setDisabled(false);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="registration">
      <div className="registration__content">
        <div className="registration__text-info">
          <h1 className="registration__title">My email</h1>
          <p className="registration__text">
            Please enter your valid email adress. We will send you a 4-digit
            code to verify your account.
          </p>
        </div>

        <form className="registration__input" ref={form}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={emailValidation}
            value={inputValue}
            required
          />

          <input
            type="number"
            name="code"
            value={newCode}
            style={{ display: "none" }}
          />
        </form>

        {!disabled ? (
          <div onClick={sendAndAddCode}>
            <Link
              className="registration__button registration__button-continue"
              to="/datingapp/signup/registration/securecode"
            >
              Continue
            </Link>
          </div>
        ) : (
          <button
            className="registration__button registration__button-disabled"
            style={{ opacity: 0.8 }}
            disabled
          >
            Continue
          </button>
        )}
      </div>
    </div>
  );
};

export default Registration;
