import "./product.css";
function Product(props) {
  return (
    <div className="main">
      <div className="product">
        <img src={props.imagepath} width={80} alt="product" />
        <h2>{props.name}</h2>
        <p>₹{props.Price}</p>
      </div>
    </div>
  );
}

export default Product;
