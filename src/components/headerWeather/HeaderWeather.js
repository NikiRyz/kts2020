import React, { Component } from "react";
import { Row } from "antd";
import "./HeaderWeather.css";
import weatherStore from "stores/weather";
import { observer } from "mobx-react";

@observer
class HeaderWeather extends Component {
  render() {
    return (
      <Row className="headerWeather">
        <h1>{weatherStore.city}</h1>
      </Row>
    );
  }
}

export default HeaderWeather;
