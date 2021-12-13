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
  const [answered, setAnswered] = useState(false);
  const [feedback, setFeedback] = useState("");

  function handleTurn() {
    if (face === "front") {
      goToNext();
      setAnswered(false);
      setFeedback("");
      setFace("back");
    } else {
      setFace("front");
    }
  }

  return (
    <div
      className={`flashcard ${face} ${feedback}`}
      data-identifier="flashcard"
    >
      <div className="back-face face">
        <span className="card-number">
          {cardNumber}/{cardQuantity}
        </span>
        <p className="question">{question}</p>
        <img
          className="turn-icon"
          data-identifier="arrow"
          src={turn}
          alt="Virar"
          onClick={handleTurn}
        />
      </div>

      <div className="front-face face">
        <span className="card-number" data-identifier="counter">
          {cardNumber}/{cardQuantity}
        </span>
        <p className="question">{question}</p>
        <p className="answer">{answer}</p>
        {answered ? (
          <img
            className="turn-icon"
            data-identifier="arrow"
            src={turn}
            alt="Virar"
            onClick={handleTurn}
          />
        ) : (
          <div className="feedbacks">
            <button
              className="neutral feedback"
              onClick={() => {
                setAnswered(true);
                setFeedback("neutral");
              }}
            >
              Aprendi agora
            </button>
            <button
              className="incorrect feedback"
              onClick={() => {
                setAnswered(true);
                setFeedback("incorrect");
              }}
            >
              Não lembrei
            </button>
            <button
              className="correct feedback"
              onClick={() => {
                setAnswered(true);
                setFeedback("correct");
              }}
            >
              Lembrei com esforço
            </button>
            <button
              className="zap feedback"
              onClick={() => {
                setAnswered(true);
                setFeedback("zap");
              }}
            >
              Zap!
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
