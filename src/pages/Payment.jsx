import React from "react";
import check from "../assets/check.png";
import "../styles/payment.css"
import { Container } from "reactstrap";

const Payment = () => {
  return (<Container>
    <div className="payment">
        
      <img src={check} alt="" srcset="" />
      <h2>ÖDƏNİŞİNİZ UĞURLA TAMAMLANMIŞDIR</h2>
      <h5>Sifarişiniz qeyd etdiyiniz saatda ünvana çatdırılacaqdır</h5>
      <p> Bizi seçdiyiniz üçün təşəkkür edirik!</p> 
    </div> </Container>
  );
};

export default Payment;
