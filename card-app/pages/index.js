import css from "./index.module.css";
import Timer from "../components/Timer";
import CardDisplay from "../components/CardDisplay";

import { useState, useEffect } from "react";

export default function Home() {
  // Gets a new deck
  // https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1&jokers_enabled=true

  // Draws cards from above deck
  // https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2

  // Reshuffle the deck
  // https://deckofcardsapi.com/api/deck/<<deck_id>>/shuffle/



  return (
    <div className={css.main}>
      <Timer />
      <CardDisplay className={css.cardDisplay} />
    </div>
  );
}
