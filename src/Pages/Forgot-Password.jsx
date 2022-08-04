import React from "react";

const ForgotPassword = () => {
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
        style={{ width: "40rem", borderRadius: "10px" }}
      >
        <h1>Forgot Password</h1>
        <h5 style={{ textAlign: "start" }}>Email</h5>
        <div className="input-group flex-nowrap">
          <input
            type="email"
            class="form-control"
            placeholder="Enter Email id"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            style={{ borderradius: "10px" }}
          />
        </div>
        <div class="d-grid gap-2">
          <button
            class="btn btn-primary"
            type="button"
            style={{ width: "100%" }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export { ForgotPassword };
