import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({doSubmit,setEmail,setPassword}) {
  // const navigate=useNavigate();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const runFunc=(email)=>{
  //   getLoginData(email);
  // }
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   runFunc(email);
  //   console.log(email, password);
  //   fetch("http://localhost:5000/login-user", {
  //     method: "POST",
  //     crossDomain: true,
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     body: JSON.stringify({
  //       email,
  //       password,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data, "userRegister");
  //       if (data.status == "ok") {
  //         alert("Login successful");
  //         window.localStorage.setItem("token", data.data);
          
          
  //         window.localStorage.setItem("loggedIn", true);

  //         navigate("/")
  //       }
  //     });
  // }

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={doSubmit}>
          <h3>Sign In</h3>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />&nbsp;
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
            <a href="/signup">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
}
