import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

import "./styles/Home.css";

const App = () => {
  return (
    <div className="Home">
      <Header />
      <Body name={"채린"} />
      <Footer /> 
    </div>
  );
};

export default App;
