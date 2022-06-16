import React, { useEffect } from "react";
import "../assets/style/header.css";
import coll from "../assets/image/coll.svg";
import remove from "../assets/image/bag.svg";
import userprof from "../assets/image/profile.svg";
import logout from "../assets/image/logout.svg";
import cart from "../assets/image/cart.svg";
import cartempty from "../assets/image/cartempty.svg";
import add from "../assets/image/add.svg"
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedOut } from "../redux/actions";
import { Tooltip } from "@mui/material";

export default function Header() {

  const { isLogin, value, user } = useSelector((state) => state.data)
  let dispatch = useDispatch();
  let navigate = useNavigate();
  useEffect(() => { }, [isLogin, value])
  function addProduct() {
    navigate("addProduct");
  }
  function handlelogout(e) {
    dispatch(userLoggedOut())
    navigate("/login")

  }

  return (
    <>
      {/* <nav className="navbar navbar-expand-lg navbar-light nav-bar">
        <a className="navbar-brand" >
          <img src={remove} width="40" height="40" className="" alt="img" />
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
        {isLogin ?
          <div className="collapse navbar-collapse a float-right" style={{ float: "right" }} id="navbarNavDropdown">
            <div className="header-name">
              <h3 className="header-name" style={{ fontWeight: "700", fontSize: "22px", maxHeight: "20px",color:"rgb(239, 224, 202);!important" }}>Hi {user.firstname} {user.lastname}</h3>
            </div>
            <ul style={{ marginLeft: "auto" }} className="navbar-nav ">
              <li className="nav-item">
                <Tooltip title={"Profile"} placement="top-start">
                  <a className="a">
                    <Link to="/profile">
                      <img src={userprof} className="icon" width={"35px"} alt="img" />
                    </Link>
                  </a>
                </Tooltip>
              </li>
              <li className="nav-item">
                <Tooltip title={"Cart"} placement="top-start">
                  <Link className="a" to="/cart">
                    <img src={value.length === 0 ? cartempty : cart} className="icon" width={"35px"} alt="img" />
                  </Link>
                </Tooltip>
              </li>
              <li className="nav-item">
                <a className="a" onClick={() => handlelogout()}>
                  <Tooltip title={"Logout"} placement="top-start">
                    <img src={logout} className="icon" width={"35px"} alt="img" />
                  </Tooltip>
                </a>
              </li>
            </ul>
          </div>
          : */}
          <div className="collapse navbar-collapse a float-right" style={{ float: "right" }} id="navbarNavDropdown">
            <div className="header-name">
              <h3 className="header-name" style={{ fontWeight: "700", fontSize: "22px", maxHeight: "20px",color:"rgb(239, 224, 202);!important" }}>Hi Admin</h3>
            </div>
            <ul style={{ marginLeft: "auto" }} className="navbar-nav ">
              {/* <li className="nav-item">
                <Tooltip title={"Profile"} placement="top-start">
                  <a className="a">
                    <Link to="/profile">
                      <img src={userprof} className="icon" width={"35px"} alt="img" />
                    </Link>
                  </a>
                </Tooltip>
              </li> */}
              
              <li className="nav-item">
              <a className="a" onClick={() => addProduct()}>
                <Tooltip title={"Add Product"} placement="top-start">
                  <Link className="a" to="addProduct">
                    <img src={add} className="icon" width={"35px"} alt="img" />
                  </Link>
                </Tooltip>
                </a>
              </li>
              <li className="nav-item">
                <a className="a" onClick={() => handlelogout()}>
                  <Tooltip title={"Logout"} placement="top-start">
                    <img src={logout} className="icon" width={"35px"} alt="img" />
                  </Tooltip>
                </a>
              </li>
            </ul>
          </div>
        {/* }
      </nav> */}
    </>
  );

}
