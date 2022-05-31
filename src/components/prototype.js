// import "../assets/style/register.css";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { useLocation } from "react-router-dom";
// import React, { useEffect } from "react";
// import { changeState, updateUser } from "../redux/actions";
// import { getSingleProduct } from "../redux/actions";
// // changeState

// export default function Prototype() {
//   // const changeState=()=>{
    
//   // }
//   // const location = useLocation();
//   // let navigate = useNavigate();
//   // console.log(location);
//   // const [state, setState] = useState({
//   //   product: "",
//   //   image: "",
//   //   color: "",
//   //   price: "",
//   // });

//   const { value } = useSelector((state) => state.data);

//   let dispatch = useDispatch();
//   // const { productname, image, color, price } = state;
//   // useEffect(() => {
//   //   dispatch(getSingleProduct(1));
//   // }, []);
//   // useEffect(() => {
//   //   if (product) {
//   //     setState({ ...product });
//   //   }
//   // }, [product]);
//   // const handleInputChange = (e) => {
//   //   let { name, value } = e.target;
//   //   setState({ ...state, [name]: value });
//   // };
//   // console.log("user", product);
//   // console.log("state", state);
//   const changeStates = (e) => {
//     e.preventDefault();
//     // if (!productname || !image || !color || !price) {
//     //   // setError("Please input all input Field");
//     //   console.log("enter form");
//     // } else {
//     //   dispatch(updateUser(state, 1));
//     //   localStorage.clear();
//     //   navigate("/login");
//     // const obj={value:"false"}
//     console.log("hello")
//     dispatch(changeState("false"))
//     }
//   // };
//   return (
//     <>
// <div>
//   <h1>jello {value}</h1>
//   <button 
//   onClick={changeStates}
  
//    >hi</button>
// </div>
//     </>
//   );
// }