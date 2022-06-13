import "../../assets/style/register.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { addProductToCart, getSingleProduct } from "../../redux/actions";
import "../../assets/style/viewproduct.css";

export default function Viewproduct() {
  const { id } = useParams();
  console.log("id", id);
  const [state, setState] = useState({
    productname: "",
    image: "",
    color: "",
    price: "",
  });
  const { product } = useSelector((state) => state.data);
  console.log("product", product);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (product) {
      setState({ ...product });
    }
  }, [product]);
  console.log(state);
  const addToCart = (e) => {
    console.log(e);
    e.preventDefault();
    console.log("called");
    dispatch(addProductToCart(product));
  };
  return (
    <>
      <div className="container main-view-product">
        <div className="row">
          <div className="col">
            <img
              className=""
              alt="product"
              width={680}
              height={680}
              src={state.image}
            />
          </div>
          <div className="col main-detail-product">
            <h1>{state.productname}</h1>
            <h2>{state.color}</h2>
            <p>{state.price}</p>
            <button className="color-white bg-blue" onClick={addToCart}>ADD</button>
          </div>
        </div>
      </div>
    </>
  );
}