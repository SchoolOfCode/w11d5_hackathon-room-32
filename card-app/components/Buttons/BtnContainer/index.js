import React from "react";
import DecreaseBtn from "../DecreaseBtn";
import IncreaseBtn from "../IncreaseBtn";
import NewGameBtn from "../NewGameBtn";
import css from "./BtnContainer.module.css";

function BtnContainer() {
  return (
    <div className={css.btnContainer}>
      <DecreaseBtn />
      <IncreaseBtn />
      <NewGameBtn />
    </div>
  );
}

export default BtnContainer;
