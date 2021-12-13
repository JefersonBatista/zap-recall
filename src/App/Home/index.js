import Button from "../../components/Button";

import "./style.css";

import logo from "../../assets/logo.png";

export default function Home({ decks, goToDeck }) {
  return (
    <div className="home">
      <header className="header">
        <img src={logo} alt="Logo" />
      </header>

      <section className="decks">
        {decks.map((deck, index) => (
          <Button
            key={index}
            identifier="start-zap-recall"
            text={deck}
            action={() => goToDeck(index)}
          />
        ))}
      </section>
    </div>
  );
}
