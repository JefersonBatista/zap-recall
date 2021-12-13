import { useState } from "react";

import Flashcard from "./Flashcard";

import "./style.css";

import miniLogo from "../../assets/logo-mini.png";

export default function Deck({ deck }) {
  const [cardNumber, setCardNumber] = useState(1);

  const flashcards = deck.content.map((card) => (
    <Flashcard
      question={card.question}
      answer={card.answer}
      cardNumber={cardNumber}
      cardQuantity={deck.content.length}
      goToNext={() => setCardNumber(cardNumber + 1)}
    />
  ));

  return (
    <div className="deck">
      <header className="header">
        <img src={miniLogo} alt="Mini Logo" />
      </header>
      <h1 className="title">{deck.title}</h1>
      {flashcards[cardNumber - 1]}
    </div>
  );
}
