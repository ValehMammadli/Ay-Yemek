import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../styles/Card.css";
import { motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0, translateY: 75 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.3 }}
      className="selected-foods"
    >
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
                    <button
                      className="dlt-btn"
                      style={{ border: "none", backgroundColor: "transparent" }}
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
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
    </motion.div>
  );
};

export default Cart;
