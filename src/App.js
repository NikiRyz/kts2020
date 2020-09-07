import React from "react";
import video from "./public/header.mp4";
import img from "./public/cut_the_rope.png";
import Weather from "./container/screens/weather/Weather";
import "./App.css";

function App() {
  return (
    <div>
      <video autoPlay loop muted width="100%" poster={img}>
        <source src={video} type="video/mp4" />
      </video>
      <Weather />
    </div>
  );
}

export default App;
