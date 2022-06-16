import "../../assets/style/register.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams,useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { addProductToCart, getSingleProduct } from "../../redux/actions";
import "../../assets/style/viewproduct.css";
import arrow from "../../assets/image/arrowleft.svg"

export default function Viewproduct() {
  const navigate=useNavigate()
  const { id } = useParams();
  console.log("id", id);
  const [state, setState] = useState({
    productname: "",
    image: "",
    color: "",
    price: "",
  });
  const { product } = useSelector((state) => state.data);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (product) {
      setState({ ...product });
    }
  }, [product]);
  const addToCart = (e) => {
    e.preventDefault();
    dispatch(addProductToCart(product));
  };
  function goBack()
  {
    console.log("back")
    navigate(-1)
  }
  return (
    <>
 
      <div className="container main-view-product">
      <img src={arrow} width={"40px"} onClick={()=>goBack()}/>
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