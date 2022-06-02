import { useDispatch } from "react-redux";
import "../assets/style/productcard.css";
import { addProductToCart, removeProductFromCart } from "../redux/actions";
import "../assets/style/cart.css";
import close from "../assets/image/close.png";

export default function Cartproduct(props) {
  let dispatch = useDispatch();
  const addToCart = (e) => {
    console.log(e);
    e.preventDefault();
    console.log("called");
    dispatch(addProductToCart(props.details));
  };
  const removeFromCart = () => {
    dispatch(removeProductFromCart(props.details.id));
  };

  const increacequant = () => {
    dispatch(removeProductFromCart(props.details.id));
  };

  const decreacequant = () => {
    dispatch(removeProductFromCart(props.details.id));
  };
  return (
    <div className="cart-card">
      <div className="row">
        <div className="col-md-4">
          <img src={props.details.image} className="" alt="product" />
        </div>
        <div className="col-md-8 cart-product-details">
          <h2 className="inline">{props.details.productname}</h2>
          <img onClick={removeFromCart} src={close} className="" alt="img" />
          <p>{props.details.color}</p>
          <h6 className="float-right inline">{props.details.price}</h6>
          <p>{props.details.quantity}</p>
          <button onClick={increacequant}>add</button>
          <button onClick={decreacequant}>add</button>
        </div>
      </div>
      <hr />
    </div>
  );
}