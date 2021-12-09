import DeckOption from "./DeckOption";

export default function Home() {
  const decks = [{ title: "Praticar JavaScript" }, { title: "Praticar React" }];

  return (
    <div className="home">
      <header className="header">
        <img src="./assets/logo.png" alt="Logo" />
      </header>

      <section className="decks">
        {decks.map((deck, key) => (
          <DeckOption key={key} title={deck.title} />
        ))}
      </section>
    </div>
  );
}
