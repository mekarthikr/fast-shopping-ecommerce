import "../assets/style/productcard.css";


export default function Productcard(props) {

  return (
    <div className="card cardwidth" >
  <img src={props.details.image} className="card-img-top card-image" alt="product"/>
  <div className="card-body ">
    <h5 className="card-title">{props.details.productname}</h5>
    <p className="card-text">{props.details.price}/- </p>
    <a className="btn bg-blue">ADD</a>
    <a className="btn bg-blue float-right">VIEW</a>
  </div>
</div>
  );
}
