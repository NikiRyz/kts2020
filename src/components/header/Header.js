import React from "react";
import { Col, Row } from "antd";
import Search from "../search/Search";
import "./Header.css";

function Header() {
  return (
    <Row className="header">
      <Col span={10} offset={6}>

        <Search />
      </Col>
    </Row>
  );
}

export default Header;
