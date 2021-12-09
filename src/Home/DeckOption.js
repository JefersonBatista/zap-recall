export default function DeckOption({ title }) {
  return (
    <button className="deck-option" data-identifier="start-zap-recall">
      <div className="title">
        <span>{title}</span>
        <img className="next-icon" src="./assets/next.png" alt="Next Icon" />
      </div>
    </button>
  );
}
