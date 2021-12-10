import "./style.css";

import next from "../../../assets/next.png";

export default function DeckOption({ title }) {
  return (
    <button className="deck-option" data-identifier="start-zap-recall">
      <div className="title">
        <span>{title}</span>
        <img className="next-icon" src={next} alt="Next Icon" />
      </div>
    </button>
  );
}
