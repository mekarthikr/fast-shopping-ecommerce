import '../assets/style/register.css'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { getSingleProduct,addToCart } from "../redux/actions";
import "../assets/style/cart.css"
import Cartproduct from './cartproduct';
import Cartsummary from './cartSummary';
// Cartproduct


export default function Cart()
{
    const { value } = useSelector((state) => state.data);
    console.log("value", value);
    const getTotal=(cartItem)=>{
        const price=cartItem.reduce((totalPrice,item)=> totalPrice+item.price,0)
        console.log("price",price)
        return price
    }
    console.log(getTotal(value))
    return(
        // <h1>Your Cart</h1>
        <>
        <div className='cart-container'>
            <h1>Your Cart</h1>
            <p>{value.length===0?"Cart is Empty" : `${value.length} item ships at checkout`}</p>
            <div className='cart-main'>
            <div className='row'>
                <div className='col-md-7'>
                <hr/>                    
                <>

                {value.map((value) => (
          <Cartproduct key={value.id} details={value} />
        ))}</>
                </div>
                <div className='col-md-5 summary-section bg-white'>
                    {/* <p>price is {getTotal(value)}</p> */}
                    <Cartsummary/>
                </div>
            </div>
            </div>
        </div>
        </>
    )

}