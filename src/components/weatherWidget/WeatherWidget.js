import React from "react";
import { Col, Progress, Row } from "antd";
import img from "public/cut_the_rope.png";
import "./WidgetsStyle.css";

function WeatherWidget(props) {
  const { weather } = props;
  return (
    <>
      <Row className="sectionsWeather">
        <Col span={12} className="colWeather">
          <h1>{Math.trunc(weather.main.temp)} °C</h1>
        </Col>
        <Col span={12} className="colWeather">
          <img
            src={
              "http://openweathermap.org/img/wn/" +
              weather.weather[0]["icon"] +
              "@2x.png"
            }
          />
          <p> {weather.weather[0]["description"]}</p>
        </Col>
      </Row>
      <Row className="sectionsWeather">
        <Col span={12} className="colWeather">
          <Progress type="circle" percent={weather.main.humidity - 1} />
          <p> Влажность</p>
        </Col>
        <Col span={12} className="colWeather">
          <img src="https://img.icons8.com/pastel-glyph/64/000000/wind--v1.png" />
          <p> {Math.trunc(weather.wind.speed)} м/с</p>
        </Col>
      </Row>
    </>
  );
}
export default WeatherWidget;
