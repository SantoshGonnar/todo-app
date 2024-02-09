import React from "react";
import './navbar.css';
import { GiNotebook } from "react-icons/gi";
import { Link } from "react-router-dom";


const navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <b>
            <GiNotebook /> &nbsp; Todo </b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <Link className="custom-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2 ">
                <Link className="custom-link" aria-current="page" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="custom-link" aria-current="page" to="/todo">
                  Todo
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="custom-link btn-nav"
                 aria-current="page" to="/signup">
                  SignUp 
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="custom-link btn-nav"
                 aria-current="page" to="/signin">
                  SignIn
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="custom-link btn-nav"
                 aria-current="page" to="/">
                  LogOut
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
