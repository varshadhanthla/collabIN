import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp({doSubmit,setCollaborations,setsignupEmail,setFname,setsignupPassword,setPhone,setSecretKey,setUserType}) {
  const navigate=useNavigate();
  // const [fname, setFname] = useState("");
  // const [collaborations,setCollaborations]=useState("");
  // const [signupemail, setsignupEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [signuppassword, setsignupPassword] = useState("");
  // const [userType, setUserType] = useState("");
  // const [secretKey, setSecretKey] = useState("");

  // const handleSubmit = (e) => {
  //   if (userType == "Admin" && secretKey != "AdarshT") {
  //     e.preventDefault();
  //     alert("Invalid Admin");
  //   } else {
  //     e.preventDefault();

  //     console.log(fname, signupemail,phone, signuppassword,collaborations);
  //     fetch("http://localhost:5000/register", {
  //       method: "POST",
  //       crossDomain: true,
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //         "Access-Control-Allow-Origin": "*",
  //       },
  //       body: JSON.stringify({
  //         fname,
  //         signupemail,
  //         phone,
  //         signuppassword,
  //         userType,
  //         collaborations
  //       }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data, "userRegister");
  //         if (data.status == "ok") {
  //           alert("Registration Successful");
  //           navigate("/login")
  //         } else {
  //           alert("Something went wrong");
  //         }
  //       });
  //   }
  // };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={doSubmit}>
          <h3>Sign Up</h3>
          <div>
            <b>Register As</b> <br/>
            <input
              type="radio"
              name="UserType"
              value="College"
              onChange={(e) => setUserType(e.target.value)}
            />&nbsp; 
            College &nbsp;&nbsp; 
            <input
          
              type="radio"
              name="UserType"
              value="Sponsor"
              onChange={(e) => setUserType(e.target.value)}
            />&nbsp;
            Sponsor &nbsp;&nbsp; 
            <input
              type="radio"
              name="UserType"
              value="Organiser"
              onChange={(e) => setUserType(e.target.value)}
            />&nbsp;
            Organiser &nbsp;&nbsp; 
            <input
              type="radio"
              name="UserType"
              value="Artist"
              onChange={(e) => setUserType(e.target.value)}
            />&nbsp;
            Artist
          </div>
          <br/>

          <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              onChange={(e) => setFname(e.target.value)}
            />
          </div>


          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setsignupEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Phone number</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter phone number"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Any past collaborations?Please provide mails separated by comma.</label>
            <input
              type="text"
              className="form-control"
              placeholder="Collaborations"
              onChange={(e) => setCollaborations(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setsignupPassword(e.target.value)}
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/login">sign in?</a>
          </p>
        </form>
      </div>
    </div>
  );
}
