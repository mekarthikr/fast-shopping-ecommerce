import "../assets/style/register.css";
import { useSelector } from "react-redux";
import React from "react";
import "../assets/style/cart.css";
import "../assets/style/cartsummary.css";

export default function Cartsummary() {
  const { value } = useSelector((state) => state.data);
  console.log("value", value);
  const getTotal = (cartItem) => {
    const price = cartItem.reduce(
      (totalPrice, item) => totalPrice + item.price,
      0
    );
    console.log("price", price);
    return price;
  };
  return (
    <>
      <div className="summary bg-white">
        <div>
          <h3>Summary</h3>
          <p>Total price is {getTotal(value)}</p>
        </div>
      </div>
    </>
  );
}