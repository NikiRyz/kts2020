import React, { Component } from "react";
import { Row, Col } from "antd";
import weatherStore from "stores/weather";
import Comments from "components/comment";
import WeatherWidget from "components/weatherWidget";
import Header from "components/header";
import HeaderWeather from "components/headerWeather";

import "./Weather.css";
import { observer } from "mobx-react";
import DevTools from "mobx-react-devtools";
import Footer from "components/footer";
import Error from "components/error/Error";
import Spin from "antd/es/spin";

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
            <DevTools />
            <Header />
            <Row className="content" w>
              <Col span={18} className="info">
                <div className="info">
                  <HeaderWeather />
                  {weatherStore.load?<div className='center'> <Spin size="large" /> </div>:   <WeatherWidget weather={weather} />}
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
