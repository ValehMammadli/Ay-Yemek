import React from "react";
import heroimg from "../assets/heroimg.png";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Category from "../components/Category/Category";
import "../styles/home.css";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Feedback from "../components/Feedbacks/feedback";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 75 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.3 }}
    >
      <section className="home_about" style={{ backgroundColor: "#F7F7F7" }}>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h3>SİZ YEMƏK FİKİRLƏŞMƏYİN BİZ SİZİN ÜÇÜN HAZIRLAYARIQ</h3>
                <p>Sizin həyat tərzinizə və büdcənizə uyğun yemək planları</p>

                <button>
                  <Link to="/about">Haqqımızda</Link>
                </button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroimg} alt="hero-img" className="w=100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <motion.section
        initial={{ opacity: 0, translateY: 30 }}
        animate={{ opacity: 1, translateY: 0, transition: 0.3 }}
        data-aos="fade-down"
        style={{ backgroundColor: "#F7F7F7" }}
      >
        <Category />
      </motion.section>
      <section style={{ backgroundColor: "#F7F7F7" }}>
        <HowItWorks />
      </section>
      <section style={{ backgroundColor: "#F7F7F7" }}>
        <Feedback />
      </section>
    </motion.div>
  );
};

export default Home;
