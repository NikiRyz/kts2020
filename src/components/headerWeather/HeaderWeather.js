import React, { Component } from "react";
import { Row } from "antd";
import { Typography } from "antd";
import "./HeaderWeather.css";
import weatherStore from "stores/weather";
import { observer } from "mobx-react";

const { Title } = Typography;
@observer
class HeaderWeather extends Component {
  render() {
    return (
      <Row className="headerWeather">
        <Title>{weatherStore.city}</Title>
      </Row>
    );
  }
}

export default HeaderWeather;
