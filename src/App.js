import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./container/Home/Home";
import Registration from "./container/Registration/Registration";
import Details from "./container/Registration/Details/Details";
import Error from "./components/Error/Error";
import SignIn from "./container/SignIn/SignIn";
import SignUp from "./container/SignUp/SignUp";
import EmailVerify from "./container/Registration/EmailVerify/EmailVerify";

function App() {
  const [inputValue, setInputValue] = useState(() => {
    const getSavedEmail = localStorage.getItem("savedEmail");
    const initialValue = getSavedEmail;
    return initialValue || "";
  });
  const [picture, setPicture] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [unCorrectBirthday, setUnCorrectBirthday] = useState(false);

  useEffect(() => {
    localStorage.setItem("savedEmail", inputValue);
  }, [inputValue]);

  const getBirthday = new Date(birthday);
  const today = new Date();

  const year = {
    year: "numeric",
  };

  const day = {
    day: "numeric",
  };

  const month = {
    month: "long",
  };

  // Birthday
  const getYear = getBirthday.toLocaleDateString("en-US", year);
  const getDay = getBirthday.toLocaleDateString("en-US", day);
  const getMonth = getBirthday.toLocaleDateString("en-US", month);

  const getCurrentYear = today.toLocaleDateString("en-US", year);

  useEffect(() => {
    if (+getCurrentYear <= +getYear) {
      setUnCorrectBirthday(true);
    } else {
      setUnCorrectBirthday(false);
    }
  }, [getYear]);

  console.log(getYear, getDay, getMonth);

  return (
    <div className="App">
      <div className="app">
        <div className="app__content">
          <Routes>
            <Route path="/datingapp" element={<Home />} />
            <Route path="/datingapp/signup" element={<SignUp />} />
            <Route
              path="/datingapp/signup/registration"
              element={
                <Registration
                  setInputValue={setInputValue}
                  inputValue={inputValue}
                />
              }
            />
            <Route
              path="/datingapp/signup/registration/securecode"
              element={<EmailVerify inputValue={inputValue} />}
            />
            <Route
              path="/datingapp/signup/registration/details"
              element={
                <Details
                  setFirstName={setFirstName}
                  setLastName={setLastName}
                  setBirthday={setBirthday}
                  unCorrectBirthday={unCorrectBirthday}
                  setPicture={setPicture}
                  picture={picture}
                />
              }
            />
            <Route path="/datingapp/signin" element={<SignIn />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
