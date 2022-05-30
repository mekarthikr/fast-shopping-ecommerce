import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../assets/style/productcard.css";
import { addProductToCart,removeProductFromCart } from "../redux/actions";
import "../assets/style/cart.css"
import close from "../assets/image/close.png"

export default function Cartproduct(props) {
  let dispatch = useDispatch();
  const addToCart=(e)=>{
    console.log(e)
    e.preventDefault();
    console.log("called")
    dispatch(addProductToCart(props.details))
    // dispatch(addToCart(props.details))
  }
  const removeFromCart=()=>{
      dispatch(removeProductFromCart(props.details.id))
  }
  return (
    <div className="cart-card" >
  {/* <img src={props.details.image} className="" alt="product"/>
  <div className="">
    <h5 className="">{props.details.productname}</h5>
    <p className="">{props.details.price}/- </p>
    
    <Link to={`/product/${props.details.id}`}><a className="btn bg-blue">VIEW</a></Link>
    <a className="btn bg-blue float-right" onClick={addToCart} >ADD</a>
  </div> */}
  <div className="row">
      <div className="col-md-4">
      <img src={props.details.image} className="" alt="product"/>
      </div>
      <div className="col-md-8 cart-product-details">
      {/* <img src={props.details.image} className="border" alt="product"/> */}
      <h2 className="inline" >{props.details.productname}</h2>
      <img onClick={removeFromCart} src={close} className="" alt="img" />
      <p>{props.details.color}</p>
      <h6 className="float-right inline" >{props.details.price}</h6>
      </div>
  </div>
  <hr/>
</div>
  );
}
