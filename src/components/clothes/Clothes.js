import React, { Component } from "react";
import { observer } from "mobx-react";
import {Col, Row, Spin} from "antd";
import weatherStore from "stores/weather";
import clothesStore from 'stores/clothes'
import Slider from "components/carousel/Carousel";
import Comments from "components/comment";
import roundTo5 from "components/utils/number";
import {clothes} from "public/clothes";
import './Clothes.css'

@observer
class Clothes extends Component {

    render() {
        const temp = roundTo5(weatherStore.weather.main.feels_like);
        let arrClothes = [];
        let comment='Я пока думаю...'
        if (!isNaN(temp)) {
            arrClothes = clothes[clothesStore.sex][0][temp]["clothes"];
            comment=clothes[clothesStore.sex][0][temp]["description"]
        }
        return (
            <Col span={6} className="clothes">
                <Row className="clothesPhotos">
                    <Col span={24}>
                        {weatherStore.load?<Spin size={"large"} />: <Slider arrClothes={arrClothes}/>}
                    </Col>
                </Row>
                <Row className="clothesComment">
                    <Col span={24}>
                        {weatherStore.load?<Spin size={"large"} />:   <Comments comment={comment}/>}

                    </Col>
                </Row>
            </Col>
        );
    }
}

export default Clothes;
