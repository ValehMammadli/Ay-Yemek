import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/cartSlice';
import { FaTrash } from 'react-icons/fa';


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
    <div> <h1>Seçilən yeməklər</h1>
      {categories.map((category) => (
        <div key={category}>
          <div>{category}</div>
          {cartItems
            .filter((item) => item.category === category)
            .map((item) => (
              <div key={item.id}>
                <div>{item.title} <span><button onClick={() => handleRemoveFromCart(item.id)}>< FaTrash /></button></span></div>
              </div>
            ))}
        </div>
      ))}
      <div>Total Price: {totalPrice}₼</div>
    </div>
  );
};

export default Cart;
