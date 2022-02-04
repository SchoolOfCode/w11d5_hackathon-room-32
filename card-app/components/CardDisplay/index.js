import React from "react";
import Card from "../Card";
import BtnContainer from "../Buttons/BtnContainer";
import css from "./CardDisplay.module.css";

function CardDisplay() {
  return (
    <div className={css.cardMain}>
      <div className={css.cardDiv}>
        <Card />
      </div>
      <div className={css.btns}>
        <BtnContainer />
      </div>
    </div>
  );
}

export default CardDisplay;
