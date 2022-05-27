import '../assets/style/register.css'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { getSingleProduct } from "../redux/actions";
import "../assets/style/viewproduct.css"


export default function Viewproduct()
{
    const {id}=useParams()
    console.log("id",id)
    const [state, setState] = useState({
        productname: "",
        image: "",
        color: "",
        price: ""
  
      });
      const { product } = useSelector((state) => state.data);
    let dispatch = useDispatch();
    const { productname, image,color,price } = state;
    useEffect(() => {
      dispatch(getSingleProduct(id));
    }, []);
    useEffect(() => {
      if (product) {
        setState({ ...product });
      }
    }, [product]);
    console.log(state)
    return(
        <>
       <div className='container main-view-product'>
       {/* <img className="" width={200} height={200} src={state.image} />
       <h3>{state.productname}</h3>
       <h3>{state.color}</h3>
       <h3>{state.price}</h3> */}
       <div className='row'>
         <div className='col'>
         <img className="" width={680} height={680} src={state.image} />
         </div>  
         <div className='col main-detail-product'>
         <h1>{state.productname}</h1>
        <h2>{state.color}</h2>
        <p>{state.price}</p>
        <button className='color-white bg-blue' >ADD</button>
           </div>     
       </div>

       </div>
        </>
    )
}