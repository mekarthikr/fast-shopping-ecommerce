import React, { Component } from "react";
import "../assets/style/header.css";
import coll from "../assets/image/coll.svg";
import remove from "../assets/image/remo.png";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <>
      {console.log("header")}
        <nav className="navbar navbar-expand-lg navbar-light nav-bar">
          <a className="navbar-brand" >
            <img src={remove} width="45" height="55" className="" alt="img" />
          </a>
          <Link to="/">
          <a className="a red" >
            FAST SHOPPING
          </a></Link>
          <button
            className="button navbar-toggler "
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="">
              <img src={coll} className="icon" width={"60px"} alt="img" />
            </span>
          </button>
          <div className="collapse navbar-collapse a float-right" id="navbarNavDropdown">
            {/* <ul className="navbar-nav ">
              <li className="nav-item">
                <a className="a" >
                  Sign In
                </a>
              </li>
              <li className="nav-item">
                <a className="a" >
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="a" >
                  Cart
                </a>
              </li>
            </ul> */}
          </div>
        </nav>
      </>
    );
  }
}
