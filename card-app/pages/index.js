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

  const [drawnCards, setDrawnCards] = useState([]);
  const [deck, setDeck] = useState({});

  useEffect(() => {
    async function fetchDeck() {
      const response = await fetch(
        "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1&jokers_enabled=true"
      );
      const data = await response.json();
      console.log("Deck:", data);
      setDeck(data);
    }

    fetchDeck();
  }, []);

  useEffect(() => {
    async function fetchCards(deckId, cardsToDraw) {
      if (!deckId) {
        return;
      }
      const response = await fetch(
        `https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=${cardsToDraw}`
      );
      const data = await response.json();
      const cards = [...data.cards, ...data.cards];
      console.log("Cards:", cards);
      setDrawnCards(cards);
    }
    fetchCards(deck.deck_id, 2);
  }, [deck]);

  return (
    <div>
      <Timer />
      <CardDisplay />
    </div>
  );
}
