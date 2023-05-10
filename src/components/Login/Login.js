import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase.js";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
        // console.log(auth);
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
        // console.log(auth);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      {/* <h1>Login Page</h1> */}
      <Link to="/">
        <img
          src="https://raw.githubusercontent.com/VishalSingh1206/Shopit-commerce/master/public/Asset%203final.png"
          className="login_img"
          alt="Logo Here"
        />
      </Link>
      <div className="login_container">
        <form>
          <h1>Sign-In</h1>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={signIn}> Sign In</button>
        </form>
        <p>By signing in you agree to our Terms & Conditions </p>
        <button className="login_registerbutton" onClick={register}>
          Create Your Account
        </button>
      </div>
    </div>
  );
}

export default Login;
