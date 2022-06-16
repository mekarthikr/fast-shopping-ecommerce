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
import AdminHeader from "./Adminheader";
import UserHeader from "./Userheader";

export default function Header() {

  const { isLogin, value, user,  isAdminLogin } = useSelector((state) => state.data)
  let dispatch = useDispatch();
  let navigate = useNavigate();
  useEffect(() => { }, [isLogin, value])
  function navbarView()
  {
    if(isLogin)
    {
      return <UserHeader/>
    }
    // else if(isAdminLogin)
    // {
    //   return <AdminHeader/>
    // }
    return false
  }
  function handlelogout(e) {
    dispatch(userLoggedOut())
    navigate("/login")

  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light nav-bar">
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
        { navbarView()

        }
      </nav>
    </>
  );

}
