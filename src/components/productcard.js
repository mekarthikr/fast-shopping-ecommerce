import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../assets/style/productcard.css";
import { addProductToCart } from "../redux/actions";

export default function Productcard(props) {
  let dispatch = useDispatch();
  const addToCart = (e) => {
    console.log(e);
    e.preventDefault();
    console.log("called");
    dispatch(addProductToCart(props.details));
  };
  return (
    <div className="card col-md-4 cardwidth">
      <img
        src={props.details.image}
        className="card-img-top card-image"
        alt="product"
      />
      <div className="card-body">
        <h5 className="card-title">{props.details.productname}</h5>
        <p className="card-text">Rs-{props.details.price}/- </p>
        <div className="bottom-btn">
        <Link to={`/product/${props.details.id}`}>
          <a className="btn bg-blue">VIEW</a>
        </Link>
        <a className="btn bg-blue float-right" onClick={addToCart}>
          ADD
        </a>
        </div>
      </div>
    </div>
  );
}