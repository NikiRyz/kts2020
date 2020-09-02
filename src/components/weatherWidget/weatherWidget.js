import React, { Fragment } from "react";
import { Col, Progress, Row } from "antd";
import img from "../../public/cut_the_rope.png";
import "./widgetsStyle.css";

function WeatherWidget() {
  return (
    <Fragment>
      <Row className="sectionsWeather">
        <Col span={12} className="colWeather">
          <h1>10 °C</h1>
        </Col>
        <Col span={12} className="colWeather">
          <Row>
            <Col span={24}>
              <img src="https://img.icons8.com/dotty/80/000000/cloud.png" />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <p> Облачно</p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="sectionsWeather">
        <Col span={12} className="colWeather">
          <Row>
            <Col span={24}>
              <Progress type="circle" percent={46} />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <p> Влажность</p>
            </Col>
          </Row>
        </Col>
        <Col span={12} className="colWeather">
          <Row>
            <Col span={24}>
              <img src="https://img.icons8.com/pastel-glyph/64/000000/wind--v1.png" />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <p> 1 м/с</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
}
export default WeatherWidget;
