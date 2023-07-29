import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { auth } from "../firebase/Firebase-config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "../styles/Register.css";
import { Container } from "reactstrap";
import { motion } from "framer-motion";

// const schema = yup.object().shape({
//   name: yup.string().required("Name is required"),
//   surname: yup.string().required("Surname is required"),
//   birthDate: yup.date().required("Birth Date is required").typeError("sedfgh"),
//   password: yup.string().required("Password is required"),
//   email: yup
//     .string()
//     .email("Invalid email address")
//     .required("Email is required"),
//   address: yup.string().required("Address is required"),
// });

function Register() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
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
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div style={{ display: "flex" }}>
            <div style={{ width: "50%" }}>
              <div style={{ marginTop: "120px" }}>
                <h1 className="register-text">QEYDİYYAT</h1>
                <div className="reg-form">
                  <div className="name-input">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Telman"></input>
                  </div>
                  <div className="sn-input">
                    <label>Surname</label>
                    <input
                      type="text"
                      name="surname"
                      placeholder="Telmanli"
                    ></input>
                  </div>
                  <div className="add-input">
                    <label>Adress</label>
                    <input
                      type="text"
                      name="adress"
                      placeholder="Adressinizi daxil edin"
                    ></input>
                  </div>

                  <div className="mail-input">
                    <label>Email</label>
                    <input
                      placeholder="Email..."
                      type="email"
                      onChange={(event) => {
                        setRegisterEmail(event.target.value);
                      }}
                    />{" "}
                  </div>
                  <div className="pw-input">
                    <label>Password</label>
                    <input
                      type="password"
                      placeholder="Password..."
                      onChange={(event) => {
                        setRegisterPassword(event.target.value);
                      }}
                    />
                  </div>

                  <button className="reg-btn" onClick={register}>
                    {" "}
                    Create User
                  </button>
                </div>
              </div>
            </div>
            <div
              className="login-bg"
              style={{ width: "50%", position: "relative", height: "683px" }}
            >
              <h3>SİZ SEÇİN BİZ İSTƏDİYİNİZ ZAMANDA YEMƏKLƏRİNİZİ ÇATDIRAQ</h3>
              <p>Sizin həyat tərzinizə və büdcənizə uyğun yemək planları</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

export default Register;
