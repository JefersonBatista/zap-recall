import { useState } from "react";

import Flashcard from "./Flashcard";

import "./style.css";

import miniLogo from "../../assets/logo-mini.png";

export default function Page() {
  const [cardNumber, setCardNumber] = useState(1);

  const questions = [
    "O que é HTML?",
    "O que é CSS?",
    "O que é JavaScript?",
    "Como a internet funciona?",
    "O que é React?",
  ];

  const flashcards = questions.map((question) => (
    <Flashcard
      question={question}
      cardNumber={cardNumber}
      cardQuantity={questions.length}
      goToNext={() => setCardNumber(cardNumber + 1)}
    />
  ));

  return (
    <div className="page">
      <header className="header">
        <img src={miniLogo} alt="Mini Logo" />
      </header>
      {flashcards[cardNumber - 1]}
    </div>
  );
}
