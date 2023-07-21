import { useEffect, useState } from "react";
import React from "react";
import { Container, Row, Col } from "reactstrap";
import products from "../assets/fake-data/products";
import FoodDetails from "./FoodDetails";

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
              className="all__btn"
              onClick={() => {
                setCategory("ALL");
              }}
            >
              ALL
            </div>

            <button
              className="anayemek"
              onClick={() => {
                setCategory("Ana Yemək");
              }}
            >
              Ana Yemək
            </button>
            <button
              className="garnir"
              onClick={() => {
                setCategory("Garnir");
              }}
            >
              Garnir
            </button>
            <button
              className="salat"
              onClick={() => {
                setCategory("Salat");
              }}
            >
              Salat
            </button>
            <button
              className="icki"
              onClick={() => {
                setCategory("İçki");
              }}
            >
              İçki
            </button>
          </div>

          <div className="allfoods">
            <div className="products-column">
              {allProducts.map((item) => (
                <div key={item.id} className="product-card mt-5">
                  <FoodDetails item={item} />
                </div>
              ))}
            </div>
            <div className="form-column">
              <form>
                <p>Ünvan</p>
                <input type="text" />
                <p>Çatdırılma saatını seçin</p>
                <input type="email" />
                <Cart />
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AllFoods;
