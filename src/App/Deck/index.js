import { useState } from "react";

import Flashcard from "./Flashcard";

import "./style.css";

import miniLogo from "../../assets/logo-mini.png";
import party from "../../assets/party.png";
import sad from "../../assets/sad.png";

export default function Deck({ deck }) {
  const [cardNumber, setCardNumber] = useState(1);
  const [incorrectCounter, setIncorrectCounter] = useState(0);
  const [finalized, setFinalized] = useState(false);
  const [success, setSuccess] = useState(null);

  const cardQuantity = deck.content.length;

  const flashcards = deck.content.map((card) => (
    <Flashcard
      question={card.question}
      answer={card.answer}
      cardNumber={cardNumber}
      cardQuantity={cardQuantity}
      someIncorrect={() => setIncorrectCounter(incorrectCounter + 1)}
      goToNext={() => {
        if (cardNumber === cardQuantity) {
          setFinalized(true);
          setSuccess(incorrectCounter === 0);
        } else {
          setCardNumber(cardNumber + 1);
        }
      }}
    />
  ));

  return (
    <div className="deck">
      <header className="header">
        <img className="mini-logo" src={miniLogo} alt="Mini Logo" />
      </header>

      <div className="container">
        <h1 className="title">{deck.title}</h1>
        {finalized ? (
          success ? (
            <SuccessPainel />
          ) : (
            <FailurePainel incorrectCounter={incorrectCounter} />
          )
        ) : (
          flashcards[cardNumber - 1]
        )}
      </div>
    </div>
  );
}

function SuccessPainel() {
  return (
    <div className="success-painel painel">
      <div className="congratulations">
        <span>PARABÉNS!</span>
        <img className="emoticon" src={party} alt="Party" />
      </div>
      <p className="message">Você não esqueceu de nenhum flashcard!</p>
    </div>
  );
}

function FailurePainel({ incorrectCounter }) {
  return (
    <div className="failure-painel painel">
      <div className="lament">
        <span>Putz..</span>
        <img className="emoticon" src={sad} alt="Sad" />
      </div>
      <p className="message">
        Você esqueceu {incorrectCounter} flashcards..
        <br />
        Não desanime! Na próxima você consegue!
      </p>
    </div>
  );
}
