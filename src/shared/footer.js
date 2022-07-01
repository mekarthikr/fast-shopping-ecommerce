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

export default function Footer() {


  return (
    <>
    <h1>footer</h1>
    </>
  );

}
