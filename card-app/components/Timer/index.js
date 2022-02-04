import React from "react";
import css from "./Timer.module.css";

function Timer() {
  return (
    <div className={css.timer}>
      <h1 className={css.time}>00:10</h1>
    </div>
  );
}

export default Timer;
