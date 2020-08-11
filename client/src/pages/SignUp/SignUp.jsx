import React from "react";
import { Link } from "react-router-dom";
import './SignUp.css'

const SignUp = () => {
  return (
    <div>
      <form className="signupForm">
        <label for="email">Email: </label>
        <input type="text" placeholder="Enter Email Address" id="email" name="email" />
        <label for="password">Password: </label>
        <input
          type="password"
          placeholder="Enter Password"
          id="password"
          name="password"
        />
        <label for="confirmPassword">Confirm Password: </label>
        <input
          type="password"
          placeholder="Confirm Your Password"
          id="confirmPassword"
          name="confirmPassword"
        />
      </form>
      <button>Create Account</button>
      <br></br>
      <br></br>
      <button><Link to="/">Back to Login</Link></button>
    </div>
  );
};

export default SignUp;
