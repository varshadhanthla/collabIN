import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Profile({ userData }) {
  return (
    <div style={{float: 'left',width: '30%',padding:'15px 10px',marginLeft:'30px',marginTop:'40px',border:'2px solid rgb(0, 149, 255)',backgroundColor:'white'}}>
    <div className="row">
      <div className="col-md-4">
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" style={{maxHeight: '100px'}} className="card-img" alt="..."/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-text">{userData.fname}</h5>
          <Link to={'/'+userData.fname.trim()} className="btn btn-primary">View Profile</Link> 
        </div>
      </div>
    </div>
  </div>
  );
}
