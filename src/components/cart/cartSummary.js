import "../../assets/style/register.css";
import { useSelector } from "react-redux";
import React from "react";
import "../../assets/style/cart.css";
import "../../assets/style/cartsummary.css";

export default function Cartsummary() {
  const { value } = useSelector((state) => state.data);
  const getTotal = (cartItem) => {
    const price = cartItem.reduce(
      (totalPrice, item) => totalPrice + parseInt(item.price),0);
    return price;
  };
  return (
    <>
      <div className="summary bg-white">
        <div>
          <h3>Summary</h3>
          {value.map((value) => (
                  <h4> {value.productname} </h4>
                ))}
                <hr/>
          <p>Total price is {getTotal(value)}</p>

        </div>
      </div>
    </>
  );
}