export default function DeckOption({ title }) {
  return (
    <article className="deck-option">
      <div className="title">
        <span>{title}</span>
        <img className="next-icon" src="./assets/next.png" alt="Next Icon" />
      </div>
    </article>
  );
}
