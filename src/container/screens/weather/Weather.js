import React from "react";
import { Row, Col } from "antd";
import Comments from "components/comment";
import WeatherWidget from "components/weatherWidget";
import Header from "components/header";
import HeaderWeather from "components/headerWeather";
import "./Weather.css";

function Weather() {
  return (
    <main className="main">
      <Header />
      <Row className="content" w>
        <Col span={18} className="info">
          <div className="info">
            <HeaderWeather />
            <WeatherWidget />
          </div>
        </Col>
        <Col span={6} className="clothes">
          <Row className="clothesPhotos">
            <Col span={24} />
          </Row>
          <Row className="clothesComment">
            <Col span={24}>
              <Comments />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="footer">
        <Col span={24}> тут будут опции</Col>
      </Row>
    </main>
  );
}

export default Weather;
