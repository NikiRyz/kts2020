import React, { Component } from "react";
import { observer } from "mobx-react";
import Spin from "antd/es/spin";
import { Row, Col } from "antd";
import weatherStore from "stores/weather";
import WeatherWidget from "components/weatherWidget";
import Header from "components/header";
import HeaderWeather from "components/headerWeather";
import Footer from "components/footer";
import Error from "components/error/Error";
import Clothes from "components/clothes/Clothes";
import "./Weather.css";


@observer
class Weather extends Component {
  componentDidMount() {
    weatherStore.weatherDate();
  }

  render() {
    const weather = weatherStore.weather;

    return (
      <>
        {weatherStore.error === "" ? (
          <main className="main">
            <Header />
            <Row className="content" w>
              <Col span={18} className="info">
                <div className="info">
                  <HeaderWeather />
                  {weatherStore.load ? (
                    <div className="center">
                      <Spin size="large" />
                    </div>
                  ) : (
                    <WeatherWidget weather={weather} />
                  )}
                </div>
              </Col>
             <Clothes/>
            </Row>

            <Row className="footer">
              <Col span={24}>
                <Footer />
              </Col>
            </Row>
          </main>
        ) : (
          <Error />
        )}
      </>
    );
  }
}

export default Weather;
