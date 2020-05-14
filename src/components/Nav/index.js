import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';

function Nav() {
  return (
    <nav className=" col py-4 px-lg-2 navbar navbar-expand-lg navbar-dark bg-dark mb-5">
      <a className="navbar-brand ml-5">Bradley Goff</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse mr-5" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              className={
                window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
            >
              Portfolio
            </Link>
          </li>
          {/* <li className="nav-item">
          <Link
              to="/contact"
              className={
                window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
