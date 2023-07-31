import React, { useState, useEffect } from "react";
import "../styles/Login.css";
import { Container } from "reactstrap";
import { Link,  useNavigate } from "react-router-dom";
import { auth } from "../firebase/Firebase-config";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { motion } from "framer-motion";

function Login() {;
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      navigate("/home")
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div style={{ backgroundColor: "#F7F7F7" }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div style={{ display: "flex" }}>
            <div style={{ width: "50%" }}>
              <div className="login-text">
                <h1> Daxil Olun </h1>{" "}
              </div>
              <div className="log-form">
                <div className="email-input">
                  <input
                    placeholder="Email..."
                    onChange={(event) => {
                      setLoginEmail(event.target.value);
                    }}
                  />{" "}
                </div>
                <div className="pass-input">
                  <input
                    placeholder="Password..."
                    onChange={(event) => {
                      setLoginPassword(event.target.value);
                    }}
                  />{" "}
                </div>
                <button className="daxil-ol" onClick={login}> 
                  {" "}
                  Login
                </button> 
                <p className="logtoreg">
                  Hesabınız yoxdur?{" "}
                  <Link to={"/register"}> Qeydiyyatdan keçin</Link>
                </p>{" "}
              </div>{" "}
            </div>

            <div
              className="login-bg"
              style={{ width: "50%", position: "relative", height: "683px" }}
            >
              <h3>SİZ SEÇİN BİZ İSTƏDİYİNİZ ZAMANDA YEMƏKLƏRİNİZİ ÇATDIRAQ</h3>
              <p>Sizin həyat tərzinizə və büdcənizə uyğun yemək planları</p>
            </div>
          </div>
        </motion.div>{" "}
      </Container>
    </div>
  );
}

export default Login;
