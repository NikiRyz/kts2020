import React from "react";
import Search from "../../Components/search/Search";
import Comments from "../../Components/comment/Comment";
import WeatherWidget from "../../Components/weatherWidget/weatherWidget";
import { Row, Col } from "antd";

function Weather() {
  return (
    <main className="main">
      <Row className="header">
        <Col span={8}></Col>
        <Col span={8} className="search">
          <Search />
        </Col>
        <Col span={8}></Col>
      </Row>
      <Row className="content" w>
        <Col span={18} className="info">
          <div className="info">
            <Row className="headerWeather">
              <Col span={3}>
                <h1>Москва</h1>
              </Col>
              <Col span={20}>
                <h1>подробнее</h1>
              </Col>
            </Row>
            <WeatherWidget />
          </div>
        </Col>
        <Col span={6} className="clothes">
          <Row className="clothesPhotos">
            <Col span={24}></Col>
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
