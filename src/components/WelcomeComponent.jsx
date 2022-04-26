import React from "react";
import "./WelcomeComponent.css";
import group from "../images/group.png"
import logo from "../images/logoApplergicFigurasGiro.png"

const WelcomeComponent = () => {
  return (
    <div className="c-wpage">
      <img className="c-wpage__title" src={group} alt="appTitle"></img>

      <img className="c-wpage__logo" src={logo} alt="appLogo"></img>
    </div>
  );
};

export default WelcomeComponent; 
