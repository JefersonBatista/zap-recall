import DeckOption from "./DeckOption";

import "./style.css";

import logo from "../../assets/logo.png";

export default function Home() {
  const decks = [{ title: "Praticar JavaScript" }, { title: "Praticar React" }];

  return (
    <div className="home">
      <header className="header">
        <img src={logo} alt="Logo" />
      </header>

      <section className="decks">
        {decks.map((deck, index) => (
          <DeckOption key={index} title={deck.title} />
        ))}
      </section>
    </div>
  );
}
