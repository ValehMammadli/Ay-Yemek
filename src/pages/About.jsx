import React from "react";
import { Container, Row, Col } from "reactstrap";
import about1 from ".././assets/about1.png";
import about2 from ".././assets/about2.png";
import "../styles/about.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, translateY: 75 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.3 }}
        className="about_items1"
      >
        <div className="about_title">
          <h3>Haqqımızda</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit interdum
            ullamcorper .
          </p>
        </div>
        <div className="about_img">
          <img style={{ marginRight: "40px" }} src={about1} alt="" />
          <img src={about2} alt="" />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateY: 75 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.3 }}
        className="about_items2"
      >
        <h3>Biz nə edirik?</h3>
        <div className="about_description">
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using.
          </p>
          <p>
            Content here', making it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy.{" "}
          </p>
        </div>
      </motion.div>
    </Container>
  );
};

export default About;
