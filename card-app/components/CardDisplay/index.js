import React from "react";
import Card from "../Card";
import BtnContainer from "../Buttons/BtnContainer";
import css from "./CardDisplay.module.css";

function CardDisplay() {
  return (
    <div>
      <Card />
      <Card />
      <Card />
      <Card />
      <BtnContainer />
    </div>
  );
}

export default CardDisplay;
