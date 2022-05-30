import { API_PRODUCTS } from "../api/api";
import React from "react";
import axios from "axios";
import Productcard from "./productcard";
import "../assets/style/productlist.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleUser } from "../redux/actions";

export default function PersonList() {
  let navigate = useNavigate();
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [products, setStateProduct] = useState([]);
  const id = localStorage.getItem("id");
  function getProducts() {
    axios
      .get(API_PRODUCTS)
      .then((res) => res.data)
      .then((data) => {
        setStateProduct(data);
      });
  }
  useEffect(() => {
    getProducts();
  }, []);
  const { user } = useSelector((state) => state.data);
  const { value } = useSelector((state) => state.data);
  console.log("value", value);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleUser(id));
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (user) {
      setState({ ...user });
    }
  }, [user]);// eslint-disable-line react-hooks/exhaustive-deps
  console.log(state);
  const editHandle = (e) => {
    e.preventDefault();
    navigate("/edit", { state: state });
  };
  return (
    <div className="main-container profile">
      <div className="profile-details">
        <h3 className="color-blue">
          Hi {state.firstname} {state.lastname}
        </h3>
        <button className="bg-blue color-white" onClick={editHandle}>
          {" "}
          Edit Profile{" "}
        </button>
      </div>
      <div className="main-container row">
        {products.map((products) => (
          <Productcard key={products.id} details={products} />
        ))}
      </div>
      <button onClick={()=>navigate('/cart')}>button</button>
    </div>
  );
}
