import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/category.css"
import kategoriya from "../../assets/Kategoriya.png";

const categoryData = [
  { display: "Ekonom", imgUrl: kategoriya },
  { display: "Gold", imgUrl: kategoriya },
  { display: "Premium", imgUrl: kategoriya },
];

const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="4" md="4" key={index}>
            <div className="category__item  align-items-center gap-3">
              <div className="category__img">
                <img src={item.imgUrl} alt="category__item" />
              </div>
              <h2>{item.display}</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem </p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
