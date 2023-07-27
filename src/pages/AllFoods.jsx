import { useEffect, useState } from "react";
import React from "react";
import { Container, Row, Col } from "reactstrap";
import products from "../assets/fake-data/products";
import FoodDetails from "./FoodDetails";
import { motion } from "framer-motion";
import "../styles/allFoods.css";
import Cart from "../components/Cart/Cart";

const AllFoods = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "Ana Yemək") {
      const filteredProducts = products.filter(
        (item) => item.category === "Ana Yemək"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "Garnir") {
      const filteredProducts = products.filter(
        (item) => item.category === "Garnir"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "Salat") {
      const filteredProducts = products.filter(
        (item) => item.category === "Salat"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "İçki") {
      const filteredProducts = products.filter(
        (item) => item.category === "İçki"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  const container = {
    visible: {
      transition: {
        // delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const equipments = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div style={{ backgroundColor: "#F7F7F7" }}>
      <Container>
        <div className="paket">
          <Col lg="12" className="text-margin"></Col>
          <Col lg="12" className="text-left">
            EKONOM
          </Col>

          <div className="food__category d-flex align-items-center gap-4">
            <div
              className={`all__btn ${category === "ALL" ? "active" : ""}`}
              onClick={() => {
                setCategory("ALL");
              }}
            >
              ALL
            </div>

            <button
              className={`anayemek ${category === "Ana Yemək" ? "active" : ""}`}
              onClick={() => {
                setCategory("Ana Yemək");
              }}
            >
              Ana Yemək
            </button>
            <button
              className={`garnir ${category === "Garnir" ? "active" : ""}`}
              onClick={() => {
                setCategory("Garnir");
              }}
            >
              Garnir
            </button>
            <button
              className={`salat ${category === "Salat" ? "active" : ""}`}
              onClick={() => {
                setCategory("Salat");
              }}
            >
              Salat
            </button>
            <button
              className={`icki ${category === "İçki" ? "active" : ""}`}
              onClick={() => {
                setCategory("İçki");
              }}
            >
              İçki
            </button>
          </div>

          <div className="allfoods">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={container}
              className="products-column"
            >
              {allProducts.map((item) => (
                <motion.div
                  variants={equipments}
                  key={item.id}
                  className="product-card mt-5"
                >
                  <FoodDetails item={item} />
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateY: 75 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.3 }}
              className="form-column"
            >
              <form>
                <p>Ünvan</p>
                <input type="text" />
                <p>Çatdırılma saatını seçin</p>
                <input type="email" />
                <Cart />
              </form>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AllFoods;
