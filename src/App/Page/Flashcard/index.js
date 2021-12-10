import "./style.css";

import turn from "../../../assets/turn.png";

export default function Flashcard({
  question,
  cardNumber,
  cardQuantity,
  goToNext,
}) {
  return (
    <div className="flashcard">
      <span className="card-number">
        {cardNumber}/{cardQuantity}
      </span>
      <p className="question">{question}</p>
      <img className="turn-icon" src={turn} alt="Virar" onClick={goToNext} />
    </div>
  );
}
