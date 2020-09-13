import React from "react";
import { Col, Progress, Row } from "antd";
import Title from "antd/es/typography/Title";
import img from "public/cut_the_rope.png";
import "./WidgetsStyle.css";

function WeatherWidget(props) {
  const { weather } = props;
  return (
    <>
      <Row className="sectionsWeather">
        <Col span={12} className="colWeather">
          <Title>{Math.trunc(weather.main.temp)} °C</Title>
        </Col>
        <Col span={12} className="colWeather">
          <img
            src={
              "http://openweathermap.org/img/wn/" +
              weather.weather[0]["icon"] +
              "@2x.png"
            }
          />
          <Title level={3}> {weather.weather[0]["description"]}</Title>
        </Col>
      </Row>
      <Row className="sectionsWeather">
        <Col span={12} className="colWeather">
          <Progress type="circle" percent={weather.main.humidity - 1} />
          <Title level={3}> Влажность</Title>
        </Col>
        <Col span={12} className="colWeather">
          <img src="https://img.icons8.com/pastel-glyph/64/000000/wind--v1.png" />
          <Title level={3}> {Math.trunc(weather.wind.speed)} м/с</Title>
        </Col>
      </Row>
    </>
  );
}
export default WeatherWidget;
