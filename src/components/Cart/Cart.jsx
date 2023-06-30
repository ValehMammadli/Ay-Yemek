import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div>
      {cartItems.map((item) => (
        <div key={item.id}>
          <div>{item.category}</div>
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default Cart;
