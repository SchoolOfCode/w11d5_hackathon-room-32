import React from "react";
import Card from "../Card";
import BtnContainer from "../Buttons/BtnContainer";
import css from "./CardDisplay.module.css";

function CardDisplay() {
  return (
    <div className={css.cardMain}>
      <div className={css.container}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className={css.container}>
        <BtnContainer />
      </div>
    </div>
  );
}

export default CardDisplay;
