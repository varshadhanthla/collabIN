import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Header = ({profs,loginstatus,collaborations}) => {
    let collab=[];
  if(collaborations) collab=collaborations.split(',');
  const [query, setQuery] = useState("")
  const navigate=useNavigate()
  const goTo=(email)=>{
    const name=profs.find(p=>p.email===email)? profs.find(p=>p.email===email).fname:"";
    navigate("/"+name);
  }
  return (
    <React.Fragment>
      <div
        className="offcanvas offcanvas-start bg-dark w-25"
        tabindex="-1"
        id="offcanvas"
        data-bs-keyboard="false"
        data-bs-backdrop="false"
      >
        <div
          className="offcanvas-header"
          style={{ marginLeft: "auto", marginRight: 0 }}
        >
          <span
            id="boot-icon"
            type="button"
            className="bi bi-arrow-left-square-fill"
            data-bs-dismiss="offcanvas"
            style={{ fontSize: "2.5rem", color: "rgb(255, 255, 255)" }}
          ></span>
        </div>
        <div className="offcanvas-body px-0">
          <ul
            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center"
            id="menu"
            style={{ color: "white" }}
          >
            <li className="nav-item">
              <Link to="/" className="nav-link text-truncate">
                <i className="fs-2 bi-house" style={{color:'white'}}></i>
                <span className="ms-1 d-none d-sm-inline" style={{color:'white'}}>Home</span>
              </Link>
            </li>
            <li className="dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle text-truncate"
                id="dropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{color:'white'}}
              >
                <i className="fs-2 bi-grid" style={{color:'white'}}></i>
                <span className="ms-1 d-none d-sm-inline" style={{color:'white'}}>Explore</span>
              </a>
              <ul
                className="dropdown-menu text-small shadow"
                aria-labelledby="dropdown"
                style={{color:'white'}}
              >
                <li><Link to="/sponsors" className="dropdown-item">Sponsors</Link></li>
                <li><Link to="/organisers" className="dropdown-item">Organisers</Link></li>
                <li><Link to="/artists" className="dropdown-item white">Artists</Link></li>
                <li><Link to="/colleges" className="dropdown-item white">Colleges</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/about" className="nav-link text-truncate">
                <i className="fs-2 bi-people" style={{color:'white'}}></i>
                <span className="ms-1 d-none d-sm-inline" style={{color:'white'}}>About Us</span>
              </Link>
            </li>
            <li className="mt-5">
              <Link to="/login" className="nav-link text-truncate">
                <i className="fs-3 bi bi-box-arrow-in-right" style={{color:'white'}}></i>
                <span className="ms-1 d-none d-sm-inline" style={{color:'white'}}>
                  Register/Login
                </span>{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="offcanvas offcanvas-end bg-dark w-25"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div
          className="offcanvas-header"
          style={{ marginLeft: "auto", marginRight: 0 }}
        >
          <span
            id="boot-icon"
            type="button"
            className="bi bi-arrow-right-square-fill"
            data-bs-dismiss="offcanvas"
            style={{ fontSize: "2.5rem", color: "rgb(255, 255, 255)" }}
          ></span>
        </div>
        <div class="offcanvas-body">
        {loginstatus && 
            (
              <div class="content text-light">
                <h3 class="m-2">Past Collaborations</h3>
                {
                  collab.map(c=><p class="m-5">{c}</p>)
                }
                
              </div>
              
            )
          
          }
          {!loginstatus && 
            <div class="form-outline p-3 text-light">
            <Link to='/login'>Login</Link> to see past collaborations!
          </div>
          }
        </div>
      </div>

      <div
        className="offcanvas offcanvas-end bg-dark w-25"
        tabindex="-1"
        id="offcanvasRight2"
        aria-labelledby="offcanvasRight2Label"
      >
        <div className="offcanvas-header">
          <h3
            className="offcanvas-title d-none d-sm-block p-3"
            style={{ color: "white" }}
            id="offcanvas"
          >
            Search
          </h3>
          <span
            id="boot-icon"
            type="button"
            className="bi bi-x-circle-fill"
            data-bs-dismiss="offcanvas"
            style={{ fontSize: "2.5rem", color: "rgb(255, 255, 255)" }}
          ></span>
        </div>
        <div class="offcanvas-body">
          {loginstatus && 
            <div class="form-outline p-3">
            <input
              type="search"
              id="form1"
              class="form-control"
              placeholder="What are you looking for ?"
              aria-label="Search"
              onChange={event => setQuery(event.target.value)}
            />
            {
              profs.filter(post => {
                if (query === '') {
                  return post;
                } else if (post.email.toLowerCase().includes(query.toLowerCase())) {
                  return post;
                }else if (post.fname.toLowerCase().includes(query.toLowerCase())) {
                  return post;
                }
              }).map((post, index) => (
                <div class="box text-light mt-3 p-3" onClick={()=>goTo(post.email)} style={{cursor:'pointer'}} key={index}>
                  <p>{post.fname}</p>
                  <p>{post.email}</p>
                </div>
              ))
            }
          </div>
          
          }
          {!loginstatus && 
            <div class="form-outline p-3 text-light">
                <Link to='/login'>Login</Link> to search!
            </div>
          
          }
          
        </div>
      </div>

      <div className="navbar-dark bg-dark" style={{ minHeight: "12vh" }}>
        <div className="row pt-3">
          <div className="col-2 align-self-start">
            <button
              className="btn float-start"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvas"
              role="button"
            >
              <i
                id="boot-icon"
                className="bi bi-justify"
                style={{ fontSize: "2.5rem", color: "rgb(255, 255, 255)" }}
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvas"
              ></i>
            </button>
          </div>
          <div className="col-8 align-self-center">
            <h1
              className="p-3 navbar-brand"
              style={{
                fontSize: "2rem",
                color: "rgb(255, 255, 255)",
                margin: "auto",
              }}
            >
              CollabIN
            </h1>
          </div>
          <div className="col align-self-end">
            <button
              className="btn float-end"
              role="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
            >
              <span
                id="boot-icon p-2"
                style={{ fontSize: "2rem", color: "rgb(255, 255, 255)" }}
              >
                C
              </span>
            </button>
            <Link to='/myprofile' className="btn float-end" role="button">
              <span
                id="boot-icon"
                className="bi bi-person"
                style={{ fontSize: "2rem", color: "rgb(255, 255, 255)" }}
              ></span>
            </Link>
            <button
              className="btn float-end"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight2"
              role="button"
            >
              <span
                id="boot-icon"
                className="bi bi-search"
                style={{ fontSize: "2rem", color: "rgb(255, 255, 255)" }}
              ></span>
            </button>
          </div>
        </div>
      </div>
      </React.Fragment>
  );
};

export default Header;