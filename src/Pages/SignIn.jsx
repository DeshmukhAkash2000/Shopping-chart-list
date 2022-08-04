import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useLoginContext} from "../Context/LogIn";
import {clickHandler} from "../Services/Login-Services";

const SignIn = () => {
  const [details, setDetails] = useState({ username: "", password: "" });
  const {state: {isLogin, error},dispatch} = useLoginContext();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  
  const inputHandler = (e) => {
    const { name, value } = e;
    setDetails({ ...details, [name]: value });
  };

  const Submit = () =>{
    clickHandler(dispatch, details)
  }

  if(isLogin){
    navigate("/dashboard")
  }

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center d-flex gap-3"
      style={{ height: "85vh" }}
    >
      <img
        style={{ width: "10rem" }}
        src="https://www.freeiconspng.com/thumbs/login-icon/user-login-icon-14.png"
        alt=""
      />
      <div
        className="border border-grey p-5"
        style={{ width: "40rem", borderRadius: "10px" }}>
        <h1 style={{ textDecoration: "underline" }}>Sign In</h1>
        <h5 style={{ textAlign: "start" }}>Email</h5>
        <div className="input-group flex-nowrap">
          <input
            type="email"
            name="username"
            class="form-control"
            placeholder="Enter Email id"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            style={{ borderradius: "10px" }}
            onChange={(e) => inputHandler(e.target)}
          />
        </div>
        <h5 className="mt-3" style={{ textAlign: "start" }}>Password</h5>
        <div className="input-group flex-nowrap ">
          <input
              type={showPassword ? "text" : "password"}
            name="password"
            class="form-control"
            placeholder="Enter Password"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            onChange={(e) => inputHandler(e.target)}
          />
            <span
                className="input-group-text rounded-4 rounded-start border-start-0"
                id="basic-addon2"
                onClick={() => setShowPassword(!showPassword)}
            >Show</span>
        </div>
       {error && <p className="text-danger">Oops! Your Username or Password is wrong.</p>}
        <div class="d-grid gap-2 mt-3">
          <button
            class="btn btn-primary"
            type="button"
            style={{ width: "100%" }}
            onClick={Submit}
          >
            SignIn
          </button>
        </div>
        <Link to="/forgotpass">Forgot Password?</Link>
        <div className="d-flex justify-content-center mt-3">
          <p>Don't have an account <span className="text-primary">Signup</span></p>
        </div>
      </div>
    </div>
  );
};

export { SignIn };
