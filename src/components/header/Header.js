import React from "react";
import { Col, Row } from "antd";
import MenuMain from "components/menu";
import Search from "../search/Search";
import "./Header.css";

function Header() {
  return (
    <Row className="header">
      <Col span={8} />
      <Col span={8} className="search">
        <Search />
      </Col>
      <Col span={4} />
        <Col span={2} >
            <MenuMain/>
        </Col>
    </Row>
  );
}

export default Header;
