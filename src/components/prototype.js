import "../assets/style/register.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import { updateUser } from "../redux/actions";
import { getSingleProduct } from "../redux/actions";

export default function Prototype() {
  const location = useLocation();
  let navigate = useNavigate();
  console.log(location);
  const [state, setState] = useState({
    product: "",
    image: "",
    color: "",
    price: "",
  });

  const { product } = useSelector((state) => state.data);
  let dispatch = useDispatch();
  const { productname, image, color, price } = state;
  useEffect(() => {
    dispatch(getSingleProduct(1));
  }, []);
  useEffect(() => {
    if (product) {
      setState({ ...product });
    }
  }, [product]);
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  console.log("user", product);
  console.log("state", state);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!productname || !image || !color || !price) {
      // setError("Please input all input Field");
      console.log("enter form");
    } else {
      dispatch(updateUser(state, 1));
      localStorage.clear();
      navigate("/login");
    }
  };
  return (
    <>
      <div className="login-block">
        <h1>Hi {state.firstname}</h1>
        <p>Please enter your details to create a new account</p>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="form-group col-md-6">
              <label>FIRST NAME</label>
              <input
                className="form-control form-input"
                type={"text"}
                name="firstname"
                value={productname || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label>LAST NAME</label>
              <input
                className="form-control form-input"
                type={"text"}
                name="lastname"
                value={image || ""}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label>EMAIL ADDERSS</label>
            <input
              className="form-control form-input"
              type={"text"}
              name="email"
              value={color || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>PASSWORD</label>
            <input
              className="form-control form-input"
              type={"password"}
              name="password"
              value={price || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-check">
            <input
              className="form-check-input check"
              type="checkbox"
              value=""
            />
            <label className="form-check-label">
              By checking here, you agree to our <strong>Terms</strong>.
            </label>
          </div>
          <button type="submit" className="login-button">
            {" "}
            CONTINUE{" "}
          </button>
        </form>
      </div>
    </>
  );
}
