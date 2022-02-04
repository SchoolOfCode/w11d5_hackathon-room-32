import React from "react";
import Card from "../Card";
import BtnContainer from "../Buttons/BtnContainer";
import css from "./CardDisplay.module.css";
import {useState, useEffect} from "react";

function CardDisplay() {

  const [selectedCards, setSelectedCards] = useState([]);
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
      const cards = data.cards.flatMap((data)=>[data, data]);
      console.log("Cards:", cards);
      setDrawnCards(cards);
    }
    fetchCards(deck.deck_id, 2);
  }, [deck]);

  function handleCardSelect(id){
    if(selectedCards.includes(id)) return;
    setSelectedCards(()=>{
      return [...selectedCards, id]
    })
  }

  useEffect(() => {
    function handleCardSelection(){
      console.log(selectedCards)

      if(selectedCards.length >= 2){
        if(selectedCards[0].substr(0,2) === selectedCards[1].substr(0,2)){
          console.log("Cards match!")
          //Remove matched cards from play..
          setDrawnCards(()=>{
            return drawnCards.filter((card)=>{
              return card.code !== selectedCards[0].substr(0,2);
            })
          })
        }
        else{
          console.log("Cards don't match..")
        }
        //Deselect cards
        setTimeout(() => {
          setSelectedCards([]);
        }, 200);

      }
    }
    handleCardSelection();

  }, [selectedCards]);



  return (
    <div>
      {drawnCards.map((card, index)=>{
        return <Card key={index} id={card.code+"-"+index} image={card.image} handleClick={handleCardSelect} isSelected={selectedCards.includes(card.code+"-"+index)} />
      })}
      <BtnContainer />
    </div>
  );
}

export default CardDisplay;
