import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/category.css";
import kategoriya from "../../assets/Kategoriya.png";
import { Link } from "react-router-dom";

const categoryData = [
  {
    display: "Ekonom",
    imgUrl: kategoriya,
    text: "Daha ətraflı",
    color: "#2BAD3F",
  },
  {
    display: "Gold",
    imgUrl: kategoriya,
    text: "Daha ətraflı",
    color: "#E8C50B",
  },
  {
    display: "Premium",
    imgUrl: kategoriya,
    text: "Daha ətraflı",
    color: "#F75C03",
  },
];

const Category = () => {
  return (
    <Container>
      <div className="category_header">
        <button>
          <Link to="/foods">Haqqımızda</Link>
        </button>
        <div className="category_title">
          <h3>KATEQORİYA</h3>
          <p>Lorem Ipsum is simply dummy text of the printing </p>
        </div>
      </div>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="4" md="4" key={index}>
            <div className="category__item  align-items-center gap-3">
              <div className="category__img">
                <img src={item.imgUrl} alt="category__item" />
              </div>
              <h2 style={{ color: item.color }}>{item.display}</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem{" "}
              </p>
              <button>{item.text}</button>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
