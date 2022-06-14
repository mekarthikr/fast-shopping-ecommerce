import React, { useEffect } from "react";
import "../assets/style/header.css";
import coll from "../assets/image/coll.svg";
import remove from "../assets/image/bag.svg";
import user from "../assets/image/profile.svg";
import logout from "../assets/image/logout.svg";
import cart from "../assets/image/cart.svg";
import cartempty from "../assets/image/cartempty.svg";
import { Link ,useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedOut } from "../redux/actions";

export default function Header ()
 {
 
  const { isLogin,value } = useSelector((state) => state.data)
  let dispatch = useDispatch();
  let navigate = useNavigate();
  console.log("cart value in header",value)
  useEffect(()=>{},[isLogin,value])
  function handlelogout(e)
  {
    console.log("logout")
    // useDispatch()
    dispatch(userLoggedOut())
    navigate("/login")

  }
  
    return (
      <>
        {console.log("header")}
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
          {/* {
            this.loggedIn() && */}
            { isLogin &&
            <div className="collapse navbar-collapse a float-right" id="navbarNavDropdown">
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <a className="a" >
                    <Link to="/profile">
                      <img src={user} className="icon" width={"35px"} alt="img" />
                      {/* <p >Profile</p> */}
                    </Link>
                  </a>
                </li>
                <li className="nav-item">
                  {/* <a className="a" > */}
                    <Link className="a" to="/cart">
                      <img src={value.length===0?cartempty:cart} className="icon" width={"35px"} alt="img" />
                    </Link>
                  {/* </a> */}
                </li>
                <li className="nav-item">
                  <a className="a"  onClick={()=>handlelogout()}>
                    <img src={logout} className="icon" width={"35px"} alt="img" style={{ marginLeft: "749px" }} />
                  </a>
                </li>
              </ul>
            </div>
 }
          {/* } */}

        </nav>
      </>
    );
  
}
