import React, {useState} from "react";

export default function Navbar() {
  
const [navSize , setNavsize] = useState("100px")

const size = () =>{
  if (navSize === "100px"){
    setNavsize("200px")
  }
  else{
    setNavsize("100px")
  }
} 

  return (
    <>
      <nav
        id = "navbar"
        className="navbar navbar-expand-lg navbar-fixed top"
        style={{
          backgroundColor: "rgb(2,70,94)",
          color: "white",
          height: {navSize},
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand link-light" href="#">
            Anshul's Portfolio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={size}
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a
                className="nav-link active link-light"
                aria-current="page"
                href="/"
              >
                {" "}
                Home
              </a>
              <a className="nav-link link-light" href="#About">
                About
              </a>
              <a className="nav-link link-light" href="#timeline">
                Timeline
              </a>
              <a className="nav-link link-light" href="#footer">
                Contact us
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
