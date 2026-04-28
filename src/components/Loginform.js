import React, { useState, useRef } from "react";
import Data from "../../Data";

const Loginform = () => {

  const [userError, setUserError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const email = useRef("");
  const password = useRef("");

  function handleSubmit(email, password) {

    const enteredEmail = email.value.trim();
    const enteredPassword = password.value.trim();

    // find user by email
    const user = Data.find(v => v.email === enteredEmail);

    // ❌ User not found
    if (!user) {
      setUserError(true);
      setPasswordError(false);
      return;
    }

    // ❌ Password incorrect
    if (user.password !== enteredPassword) {
      setUserError(false);
      setPasswordError(true);
      return;
    }

    // ✅ Correct login
    setUserError(false);
    setPasswordError(false);

    console.log("Login successful:", user);
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(email.current, password.current);
        }}
      >
        <input
          type="email"
          placeholder="enter your email"
          id="input-email"
          ref={email}
        />
        <br /><br />

        <input
          type="password"
          placeholder="enter your password"
          id="input-password"
          ref={password}
        />
        <br /><br />

        {/* Always present in DOM (Cypress friendly) */}
        <p
          id="password-error"
          style={{ display: passwordError ? "block" : "none", color: "red" }}
        >
          Password Incorrect
        </p>

        <button type="submit" id="submit-form-btn">
          Login
        </button>
      </form>

      {/* Always present in DOM */}
      <p
        id="user-error"
        style={{ display: userError ? "block" : "none", color: "red" }}
      >
        User not Found
      </p>
    </div>
  );
};

export default Loginform;