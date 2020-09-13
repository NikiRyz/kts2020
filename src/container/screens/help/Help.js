import React from "react";
import { Divider, Row, Col, Switch, Image, Carousel, Button } from "antd";
import Title from "antd/es/typography/Title";
import "./Help.css";
import Search from "components/search";
import Spin from "antd/es/spin";
import Comments from "components/comment";
import {
  ManOutlined,
  ArrowLeftOutlined,
  WomanOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

function Help() {
  return (
    <main className="main">
      <div className="text">
        <Divider>
          <Title level={3}>Как пользоваться?</Title>
        </Divider>
        <Row gutter={[8, 40]}>
          <p>Привет! Я проведу тебе небольшую экскурсию по нашему приложеню.</p>
        </Row>

        <Row justify="space-around" gutter={[8, 40]}>
          <Col span={12}>

            <Search />
          </Col>
          <Col span={12} align="middle">

            <p>Выбери город из списка</p>
          </Col>
        </Row>
        <Row justify="space-around" gutter={[8, 40]}>
          <Col span={12} align="middle">

            <Spin />
          </Col>
          <Col span={12} align="middle">

            <p>Дождись загрузки данных</p>
          </Col>
        </Row>
        <Row justify="space-around" gutter={[8, 40]}>
          <Col span={12} align="middle">

            <Switch
              checkedChildren={<WomanOutlined />}
              unCheckedChildren={<ManOutlined />}
              defaultChecked
            />
          </Col>
          <Col span={12} align="middle">

            <p>Выбери свой пол</p>
          </Col>
        </Row>
        <Row justify="space-around" gutter={[8, 40]}>
          <Col span={12}>

            <Comments comment="Сегодня прохладно. Рекомендую надеть джинсы, демисезонные ботинки, блузку и кожаную куртку" />
          </Col>
          <Col span={12} align="middle">

            <p>Прочитай рекомендации, что надеть</p>
          </Col>
        </Row>
        <Row justify="space-around" gutter={[8, 40]}>
          <Col span={12}>
            <Row justify="space-around">
              {[
                "flat_round/64/000000/blazer.png",
                "flat_round/64/000000/womens-shirt.png",
                "color/48/000000/jeans.png",
                "ios-filled/50/000000/womens-shoe.png",
              ].map((elem, i) => {
                return (
                  <div key={i}>
                    <Image src={"https://img.icons8.com/" + elem} />
                  </div>
                );
              })}
            </Row>
          </Col>

          <Col span={12} align="middle">

            <p>Посмотри пример лука</p>
          </Col>
        </Row>
        <Divider>
          <Link to="/">
            <Button shape="circle" icon={<ArrowLeftOutlined />} />
          </Link>
        </Divider>
      </div>
    </main>
  );
}

export default Help;
