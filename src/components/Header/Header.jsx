import React from "react";
import { Container } from "reactstrap";
import logo from "../../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import "../../styles/header.css";
import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/Firebase-config";
const nav__links = [
  {
    display: "Ana Səhifə",
    path: "/home",
  },
  {
    display: "Haqqımızda",
    path: "/about",
  },
  {
    display: "Paketler",
    path: "/foods",
  },
  {
    display: "Əlaqə",
    path: "/contact",
  },
];

const Header = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);
  const logout = async () => {
    await signOut(auth);
  };
  return (
    <header className="header" style={{ backgroundColor: "#F7F7F7" }}>
      <Container>
        <div className="nav_wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="navigation">
            <div className="menu d-flex align-items-center gap-5">
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>
          {/* <div className="nav-right d-flex align-items-center gap-3 "> */}
          {user ? (
            <div className="nav-right d-flex align-items-center gap-3  sign-out">
              <span>{user.email}</span>
              <button onClick={logout}> Sign Out </button>
            </div>
          ) : (
            <div className="nav-right d-flex align-items-center gap-3">
              <span className="login">
                <Link to="/login">
                  <button>Daxil Ol</button>
                </Link>
              </span>
              <span className="register">
                <Link to="/register" style={{ textDecoration: "none" }}>
                  <button>Qeydiyyat</button>
                </Link>
              </span>
            </div>
          )}
          {/* </div> */}
        </div>
      </Container>
    </header>
  );
};

export default Header;
