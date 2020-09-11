import React from "react";
import { Col, Progress, Row } from "antd";
import img from "public/cut_the_rope.png";
import "./WidgetsStyle.css";

function WeatherWidget() {
  return (
    <>
      <Row className="sectionsWeather">
        <Col span={12} className="colWeather">
          <h1>10 °C</h1>
        </Col>
        <Col span={12} className="colWeather">
          <img src="https://img.icons8.com/dotty/80/000000/cloud.png" />
          <p> Облачно</p>
        </Col>
      </Row>
      <Row className="sectionsWeather">
        <Col span={12} className="colWeather">
          <Progress type="circle" percent={46} />
          <p> Влажность</p>
        </Col>
        <Col span={12} className="colWeather">
          <img src="https://img.icons8.com/pastel-glyph/64/000000/wind--v1.png" />
          <p> 1 м/с</p>
        </Col>
      </Row>
    </>
  );
}
export default WeatherWidget;
