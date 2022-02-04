import React from "react";
import css from "./Card.module.css";

function Card({image, handleClick, id, isSelected}) {

  function getId(){
    return id;
  }

  const selectedStyle = ()=>{
    return isSelected ? {} : {"opacity": "0.2"}
  }

  return (

    <div style={selectedStyle()} onClick={()=>{
      handleClick(getId())
    }}>
      <img
        src={image}
        alt="card"
      />
    </div>
  );
}

export default Card;
