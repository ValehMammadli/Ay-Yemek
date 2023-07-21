import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../styles/Card.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  // Get all unique categories from cart items
  const categories = [...new Set(cartItems.map((item) => item.category))];

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  return (
    <div className="selected-foods">
      {" "}
      <h1>Seçilən yeməklər</h1>
      {categories.map((category) => (
        <div style={{ margin: "10px 15px" }} key={category}>
          <div className="category">
            <span>{category}</span>
          </div>
          {cartItems
            .filter((item) => item.category === category)
            .map((item) => (
              <div key={item.id}>
                <div className="food-name">
                  <span>{item.title} </span>
                  <span style={{ marginTop: "5px" }}>
                    <button onClick={() => handleRemoveFromCart(item.id)}>
                      <FaTrash />
                    </button>
                  </span>
                </div>
              </div>
            ))}
        </div>
      ))}
      <div className="total-price">
        <span>Total Price: {totalPrice}₼ </span>
      </div>
      <Link to="/checkout" className="checkout-btn">
        <button>Proceed to Checkout</button>
      </Link>
    </div>
  );
};

export default Cart;
