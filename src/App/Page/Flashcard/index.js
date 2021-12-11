import { useState } from "react";

import "./style.css";

import turn from "../../../assets/turn.png";

export default function Flashcard({
  question,
  answer,
  cardNumber,
  cardQuantity,
  goToNext,
}) {
  const [flipped, setFlipped] = useState(false);

  function handleTurn() {
    if (flipped) {
      goToNext();
      setFlipped(false);
    } else {
      setFlipped(true);
    }
  }

  return (
    <div className="flashcard">
      <span className="card-number">
        {cardNumber}/{cardQuantity}
      </span>
      <p className="text">{flipped ? answer : question}</p>
      <img className="turn-icon" src={turn} alt="Virar" onClick={handleTurn} />
    </div>
  );
}
