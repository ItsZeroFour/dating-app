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

  useEffect(() => {
    localStorage.setItem("savedEmail", inputValue);
  }, [inputValue]);

  // Hello!

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
              element={<Details />}
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
