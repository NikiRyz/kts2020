import React from "react";
import {Carousel, Image} from "antd";
import "./Carousel.css";


function Slider(props) {

  return (
    <Carousel autoplay >
      {props.arrClothes.map((elem, i) => {
        return (
          <div key={i}>
            <Image src={"https://img.icons8.com/" + elem} />
          </div>
        );
      })}

    </Carousel>
  );
}

export default Slider;

