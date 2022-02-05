import React from "react";
import css from "./NewGameBtn.module.css";

function NewGameBtn() {
  return (
    <div>
      <button onClick={()=>{
        window.location.reload(false);
      }} className={css.btn}>New Game Button</button>
    </div>
  );
}

export default NewGameBtn;
