import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../styles/Register.css";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  surname: yup.string().required("Surname is required"),
  birthDate: yup.date().required("Birth Date is required"),
  password: yup.string().required("Password is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  address: yup.string().required("Address is required"),
});

const Register = () => {
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
    alert("Registration successful!");
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ backgroundColor: "#F7F7F7", width: "50%" }}>
        {isLoggedIn ? (
          <div className="welcome-items">
            <h1>Welcome, logged-in user!</h1>
            <button onClick={() => setIsLoggedIn(false)}>Logout</button>
          </div>
        ) : (
          <div style={{ marginTop: "120px" }}>
            <h1 className="register-text">QEYDİYYAT</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="reg-form">
              <div className="name-input">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Telman"
                  {...register("name")}
                />
                {errors && errors.name && <p>{errors.name.message}</p>}
              </div>

              <div className="sn-input">
                <label>Surname</label>
                <input
                  type="text"
                  name="surname"
                  placeholder="Telmanli"
                  {...register("surname")}
                />
                {errors && errors.surname && <p>{errors.surname.message}</p>}
              </div>

              <div className="bd-input">
                <label>Birth Date</label>
                <input
                  type="date"
                  name="birthDate"
                  {...register("birthDate")}
                />
                {errors && errors.birthDate && (
                  <p>{errors.birthDate.message}</p>
                )}
              </div>

              <div className="pw-input">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Parolunuzu daxil edin"
                  {...register("password")}
                />
                {errors && errors.password && <p>{errors.password.message}</p>}
              </div>

              <div className="mail-input">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="E-poçt adresinizi daxil edin"
                  {...register("email")}
                />
                {errors && errors.email && <p>{errors.email.message}</p>}
              </div>

              <div className="add-input">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Adresinizi daxil edin"
                  {...register("address")}
                />
                {errors && errors.address && <p>{errors.address.message}</p>}
              </div>

              <button className="reg-btn" type="submit">
                Qeydiyyatdan Keç
              </button>
            </form>
          </div>
        )}
      </div>
      <div
        className="login-bg"
        style={{ width: "50%", position: "relative", height: "890px" }}
      >
        <h3>SİZ SEÇİN BİZ İSTƏDİYİNİZ ZAMANDA YEMƏKLƏRİNİZİ ÇATDIRAQ</h3>
        <p>Sizin həyat tərzinizə və büdcənizə uyğun yemək planları</p>
      </div>
    </div>
  );
};

export default Register;
