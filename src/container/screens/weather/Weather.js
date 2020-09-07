import React, {Component, useEffect, useState} from "react";
import { Row, Col } from "antd";
import weatherStore from 'stores/weather';
import Comments from "components/comment";
import WeatherWidget from "components/weatherWidget";
import Header from "components/header";
import HeaderWeather from "components/headerWeather";
import "./Weather.css";
import {observer} from "mobx-react";


@observer class Weather extends Component{

  componentDidMount() {
    weatherStore.weatherDate();
  }

  render() {
  const weather=weatherStore.weather;

    return (
    <main className="main">
      <Header />
      <Row className="content" w>
        <Col span={18} className="info">
          <div className="info">
            <HeaderWeather />
            <WeatherWidget weather={weather} />
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
}}

export default Weather;
