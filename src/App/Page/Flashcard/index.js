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
  const [face, setFace] = useState("back");

  function handleTurn() {
    if (face === "front") {
      goToNext();
      setFace("back");
    } else {
      setFace("front");
    }
  }

  return (
    <div className={`flashcard ${face}`}>
      <div className="back-face face">
        <span className="card-number">
          {cardNumber}/{cardQuantity}
        </span>
        <p className="question">{question}</p>
        <img
          className="turn-icon"
          src={turn}
          alt="Virar"
          onClick={handleTurn}
        />
      </div>

      <div className="front-face face">
        <span className="card-number">
          {cardNumber}/{cardQuantity}
        </span>
        <p className="question">{question}</p>
        <p className="answer">{answer}</p>
        <img
          className="turn-icon"
          src={turn}
          alt="Virar"
          onClick={handleTurn}
        />
      </div>
    </div>
  );
}
