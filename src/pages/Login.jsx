import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../styles/Login.css";
import login from "../assets/login-img.png";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setIsLoggedIn(true);
    alert("Login successful!");
  };

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 75 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.3 }}
      style={{ backgroundColor: "#F7F7F7" }}
    >
      {isLoggedIn ? (
        <div className="welcome-log-items">
          <h1>Welcome, logged-in user!</h1>
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </div>
      ) : (
        <div style={{ display: "flex" }}>
          <div style={{ width: "50%" }}>
            <Container>
              {" "}
              <div className="login-text">
                <h1>DAXİL OLUN </h1>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="log-form">
                <div className="email-input">
                  <label>E-poçt</label>
                  <input
                    type="text"
                    name="email"
                    {...register("email")}
                    placeholder="E-poçt adresinizi daxil edin"
                  />
                  {errors && errors.email && <p>{errors.email.message}</p>}
                </div>

                <div className="pass-input">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Parolunuzu daxil edin"
                    {...register("password")}
                  />
                  {errors && errors.password && (
                    <p>{errors.password.message}</p>
                  )}
                </div>

                <button className="daxil-ol" type="submit">
                  Login
                </button>
              </form>
              <p className="logtoreg">
                Hesabınız yoxdur?{" "}
                <Link to={"/register"}> Qeydiyyatdan keçin</Link>
              </p>
            </Container>
          </div>

          <div
            className="login-bg"
            style={{ width: "50%", position: "relative", height: "890px" }}
          >
            <h3>SİZ SEÇİN BİZ İSTƏDİYİNİZ ZAMANDA YEMƏKLƏRİNİZİ ÇATDIRAQ</h3>
            <p>Sizin həyat tərzinizə və büdcənizə uyğun yemək planları</p>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Login;
