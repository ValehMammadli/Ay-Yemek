import React from "react";
import { Container } from "reactstrap";
import "../styles/Contact.css";
import bgcont from "../assets/bg-cont.png";
import mail from "../assets/mail-cont.png";
import tel from "../assets/tel-cont.png";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div  initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.5, ease: 'easeInOut' }}>
      <div
        className="contact-all"
       
      >
        <Container style={{backgroundColor:"white",borderRadius:"50px"}}>
          <div className="contact-text">
            <h3>Əlaqə</h3>
            <p>
              Bizimlə aşağıdakı məlumatlar vasitəsilə əlaqə saxlaya bilərsiniz
            </p>
          </div>
          <div className="contact-items" style={{ display: "flex" }}>
            <div className="contact-mail">
              <div style={{ marginLeft: "20px" }} className="mail-items">
                <img src={bgcont} alt="" />
                <img src={mail} alt="" />
                <h6>E-POÇT</h6>
                <p>info@ay-yemek.az</p>
              </div>
              <div className="tel-items" style={{ marginLeft: "80px" }}>
                <img src={bgcont} alt="" />
                <img src={tel} alt="" />
                <h6>Telefon</h6>
                <div>
                  <p>+99412 409 40 94</p>
                  <p>+99412 409 40 94</p>
                </div>
              </div>
            </div>
          </div>
          <form action="">
            <div style={{ display: "flex" }}>
              <div>
                <p>Ad Soyad</p>
                <input
                  className="n-inp"
                  type="name"
                  placeholder="telmanli telman"
                />
              </div>
              <div>
                <p style={{ marginLeft: "80px" }}>E-poçt</p>
                <input
                  className="e-inp"
                  type="email"
                  placeholder="telmanli@gmail.com"
                />
              </div>
            </div>
            <div style={{ marginTop: "25px" }}>
              <p>Mesajınız</p>
              <textarea className="m-inp" type="text" placeholder="Mesajınız" />
            </div>
            <button className="contact-btn" type="submit">
              Gönder
            </button>
          </form>
        </Container>
      </div>
    </motion.div>
  );
};

export default Contact;
