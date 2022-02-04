import React from "react";
import css from "./Card.module.css";
import cardBack from "../../public/card-back.png"

function Card({image, handleClick, id, isSelected}) {

  console.log(cardBack)

  function getId(){
    return id;
  }

  const selectedImg = ()=>{
    return isSelected ? image : cardBack.src
  }

  return (

    <div onClick={()=>{
      handleClick(getId())
    }}>
      <img
        src={selectedImg()}
        alt="card"
      />
    </div>
  );
}

export default Card;
