import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import video from "./public/header.mp4";
import img from "./public/cut_the_rope.png";
import Weather from "./container/screens/weather/Weather";
import Help from "container/screens/help/Help";
import About from "container/screens/about/About";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <video autoPlay loop muted width="100%" poster={img}>
          <source src={video} type="video/mp4" />
        </video>
        <Route path="/" component={Weather} exact />
        <Route path="/help" component={Help} />
        <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
}

export default App;
