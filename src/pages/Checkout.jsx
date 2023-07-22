import React, { useState } from "react";
import { useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import "../styles/checkout.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Checkout = () => {
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const [deliveryDate, setDeliveryDate] = useState(null);
  const schema = yup.object().shape({
    cardNumber: yup
      .string()
      .required("Card Number is required")
      .matches(/^\d{16}$/, "Card Number must be 16 digits"),
    expiryDate: yup
      .string()
      .required("Expiry Date is required")
      .matches(/^\d{2}\/\d{2}$/, "Expiry Date must be in the format MM/YY"),
    cvv: yup
      .string()
      .required("CVV is required")
      .matches(/^\d{3}$/, "CVV must be 3 digits"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  // Handle the date change event
  const handleDateChange = (date) => {
    setDeliveryDate(date);
  };

  const onSubmit = (data) => {
    console.log(data); // Perform payment processing here (just a placeholder for now)
  };

  return (
    <div className="checkout-container">
      <div className="checkout-form">
        <h2>Ödəniş</h2>
        <div>
          <h5>
            {" "}
            <label htmlFor="deliveryDate">Menyu Tarixleri</label>
          </h5>
          <DatePicker
            className="date_picker"
            selected={deliveryDate}
            onChange={handleDateChange}
            dateFormat="yyyy-MM-dd"
            placeholderText="Select a date"
          />
        </div>
        <div>
          <h3>Ümumi Məbləğ: {totalPrice}₼</h3>
        </div>
        <div className="payment-section">
          <h3>Payment Information</h3>
          <div className="payment-input">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              placeholder="1234 5678 9012 3456"
              {...control.register("cardNumber")}
            />
            {errors.cardNumber && <p>{errors.cardNumber.message}</p>}
          </div>
          <div className="payment-input">
            <label htmlFor="expiryDate">Expiry Date</label>
            <input
              type="text"
              id="expiryDate"
              placeholder="MM/YY"
              {...control.register("expiryDate")}
            />
            {errors.expiryDate && <p>{errors.expiryDate.message}</p>}
          </div>
          <div className="payment-input">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              placeholder="123"
              {...control.register("cvv")}
            />
            {errors.cvv && <p>{errors.cvv.message}</p>}
          </div>
        </div>
        <Link to="/checkout">
          <button onClick={handleSubmit(onSubmit)}>Ödəniş et</button>
        </Link>
      </div>
      <div className="checkout-image"></div>
    </div>
  );
};

export default Checkout;
