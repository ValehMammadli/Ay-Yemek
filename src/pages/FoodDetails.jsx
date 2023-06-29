import React from "react";
import { Link } from "react-router-dom";
const FoodDetails = (props) => {
  const { id,title, image, price, desc } = props.item;
  return (
    <div className="product__item" >
      <div className="product__img">
        <img src={image} alt="product-img" className="w-45" style={{height:"178px"}} />
      </div>
      <div className="product__content">
        <h3><Link to={`/foods/${id}`}>{title}</Link></h3>
        <p>{desc}</p>

        <div className="add_cart">
          <span className="product__price">{price}₼ </span>
          <button className="addToCart__btn">Əlavə et</button>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
