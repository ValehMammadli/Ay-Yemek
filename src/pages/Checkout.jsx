import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';
import '../styles/checkout.css'

const Checkout = () => {
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const [deliveryDate, setDeliveryDate] = useState(null);

  // Handle the date change event
  const handleDateChange = (date) => {
    setDeliveryDate(date);
  };

  return (
    <div className='checkout-container'>
       <div className="checkout-form">
      <h2>Ödəniş</h2>
      <div> 
       <h5> <label htmlFor="deliveryDate">Menyu Tarixleri</label></h5>
        <DatePicker className='date_picker'
          selected={deliveryDate}
          onChange={handleDateChange}
          dateFormat="yyyy-MM-dd"
          placeholderText="Select a date"
        />
      </div>
      <div>Total Price: {totalPrice}₼</div>
      <Link to="/checkout">
        <button>Proceed to Checkout</button>
      </Link>
      <div className="payment-section">
          <h3>Payment Information</h3>
          <div className="payment-input">
            <label htmlFor="cardNumber">Card Number</label>
            <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" />
          </div>
          <div className="payment-input">
            <label htmlFor="expiryDate">Expiry Date</label>
            <input type="text" id="expiryDate" placeholder="MM/YY" />
          </div>
          <div className="payment-input">
            <label htmlFor="cvv">CVV</label>
            <input type="text" id="cvv" placeholder="123" />
          </div>
        </div>
      </div>
      <div className="checkout-image"></div>
    </div>
  );
};

export default Checkout;
