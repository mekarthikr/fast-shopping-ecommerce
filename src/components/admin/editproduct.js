import "../../assets/style/register.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../redux/actions";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import { getSingleProduct } from "../../redux/actions";
import "../../assets/style/editproduct.css";

export default function Prototype() {
  const location = useLocation();
  let navigate = useNavigate();
  let { id } = useParams();
  //console.log(location);
  const [state, setState] = useState({
    productname: "",
    image: "",
    color: "",
    price: "",
  });

  const { product } = useSelector((state) => state.data);
  let dispatch = useDispatch();
  const { productname, image, color, price } = state;
  useEffect(() => {
    dispatch(getSingleProduct(id));
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
 // console.log("user", product);
  //console.log("state", state);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!productname || !image || !color || !price) {
    //  console.log("enter form");
    } else {
      dispatch(updateProduct(state, id));
      navigate("/adminpanel");
    }
  };
  return (
    <>
      <div className="edit-product-block bg-blue">
        <h1 className="color-white">Edit Product</h1>
        <p className="color-white">Enter the modification for the product</p>
        <form onSubmit={handleSubmit} autocomplete="off">
          <div className="row">
            <div className="col">
              <div className="form-group row">
                <label className="color-white">PRODUCT NAME</label>
                <input
                  className="form-control form-input"
                  type={"text"}
                  name="productname"
                  value={productname || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group row">
                <label className="color-white">IMAGE URL</label>
                <input
                  className="form-control form-input"
                  type={"text"}
                  name="image"
                  value={image || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group row">
                <label className="color-white">PRODUCT COLOR</label>
                <input
                  className="form-control form-input"
                  type={"text"}
                  name="color"
                  value={color || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group row">
                <label className="color-white">PRICE</label>
                <input
                  className="form-control form-input"
                  type={"text"}
                  name="price"
                  value={price || ""}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col edit-product-view">
              <div className="bg-blue edit-product-card">
                <img src={image} />
                <h3 className="color-white">{productname}</h3>
                <p className="color-white">{color}</p>
                <p className="color-white">{price}</p>
              </div>
            </div>
          </div>
          <button type="submit" className="login-button">
            {" "}
            UPDATE{" "}
          </button>
        </form>
      </div>
    </>
  );
}