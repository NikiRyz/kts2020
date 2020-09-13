import React from "react";
import { Col, Row } from "antd";
import Search from "../search/Search";
import "./Header.css";

function Header() {
  return (
    <Row className="header">
      <Col span={8} />
      <Col span={8} className="search">
        <Search />
      </Col>
    </Row>
  );
}

export default Header;
