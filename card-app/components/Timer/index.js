import React from "react";
import {useRef, useState, useEffect} from "react";
import css from "./Timer.module.css";

function Timer() {
  const intervalRef = useRef(null);
  const [num, setNum] = useState(10);  const decreaseNum = () => setNum((prev) => prev - 1);  useEffect(() => {
    intervalRef.current = setInterval(decreaseNum, 1000);    return () => clearInterval(intervalRef.current);
  }, []);  useEffect(() => {
    if (num === 0) {
      setNum(0);
    }
  });  return (
    <div className={css.timer}>
      <h1 className={css.time}>{num <= 0 ? "0" : num}</h1>
    </div>
  );
}
export default Timer;