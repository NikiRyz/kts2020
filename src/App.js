import React from "react";
import video from "./public/header.mp4";
import img from "./public/cut_the_rope.png";
import Weather from "./Container/screens/Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <video className="videoTag" autoPlay loop muted width="100%" poster={img}>
        <source src={video} type="video/mp4" />
      </video>
      <Weather />
    </div>
  );
}

export default App;
