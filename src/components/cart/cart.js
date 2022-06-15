import "../../assets/style/register.css";
import { useSelector } from "react-redux";
import React from "react";
import "../../assets/style/cart.css";
import Cartproduct from "./cartproduct";
import Cartsummary from "./cartSummary";

export default function Cart() {
  const { value } = useSelector((state) => state.data);
  //console.log("value", value);
  const getTotal = (cartItem) => {
    const price = cartItem.reduce(
      (totalPrice, item) => totalPrice + item.price,0);
    //console.log("price", price);
    return price;
  };
  //console.log(getTotal(value));
  return (
    <>
      <div className="cart-container">
        <h1>Your Cart</h1>
        <p>
          {value.length === 0
            ? "Cart is Empty"
            : `${value.length} item ships at checkout`}
        </p>
        <div className="cart-main">
          <div className="row">
            <div className="col-md-7">
              <hr />
              <>
                {value.map((value) => (
                  <Cartproduct key={value.id} details={value} />
                ))}
              </>
            </div>
            <div className="col-md-5 summary-section">
            {value.length!==0 &&<Cartsummary />}              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}