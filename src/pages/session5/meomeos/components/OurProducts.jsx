import React from "react";
import "./OurProduct.scss";
import { Col, Row } from "antd";
import ProductCard from "./ProductCard";
export default function OurProducts() {
  return (
    <div className="ourProduct__container">
      <div className="titles">
        <span className="titles--text">OUR PRODUCTS</span>
        <span className="sologan--text">
          sản phẩm không xịn thì dỏm, mua không mua cũng phải mua!
        </span>
      </div>
      <Row>
        <Col style={{ marginTop: "1em" }} span={6}>
          <ProductCard></ProductCard>
        </Col>
        <Col style={{ marginTop: "1em" }} span={6}>
          <ProductCard></ProductCard>
        </Col>
        <Col style={{ marginTop: "1em" }} span={6}>
          <ProductCard></ProductCard>
        </Col>
        <Col style={{ marginTop: "1em" }} span={6}>
          <ProductCard></ProductCard>
        </Col>
        <Col style={{ marginTop: "1em" }} span={6}>
          <ProductCard></ProductCard>
        </Col>
        <Col style={{ marginTop: "1em" }} span={6}>
          <ProductCard></ProductCard>
        </Col>
      </Row>
    </div>
  );
}
