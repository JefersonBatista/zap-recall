import { useState } from "react";
import Home from "./Home";
import Page from "./Page";

import "./style.css";

export default function App() {
  const decks = [
    {
      title: "Praticar questões técnicas",
      content: [
        {
          question: "O que é HTML?",
          answer: "Linguagem para estruturar páginas Web.",
        },
        {
          question: "O que é CSS?",
          answer: "Linguagem para estilizar páginas Web.",
        },
        {
          question: "O que é JavaScript?",
          answer: "Linguagem para tornar páginas Web interativas.",
        },
        {
          question: "Como a internet funciona?",
          answer:
            "A internet é uma grande rede mundial de computadores, onde todos os servidores podem ser acessados por todos os clientes.",
        },
        {
          question: "O que é React?",
          answer:
            "É uma biblioteca para facilitar a criação de páginas Web por meio da componentização.",
        },
      ],
    },
    {
      title: "Praticar questões comportamentais",
      content: [
        {
          question: "Quando paramos de aprender?",
          answer: "Nunca.",
        },
        {
          question: "O que é importantíssimo para seguir aprendendo?",
          answer: "Fazer perguntas.",
        },
        {
          question:
            "O que é preciso para ser realista em relação ao que se sabe?",
          answer: "Ser humilde.",
        },
        {
          question: "O que é deixar tudo pra última hora?",
          answer: "Procrastinação.",
        },
        {
          question: "Se estiver desconcentrado, use...",
          answer: "Técnicas de atenção plena.",
        },
      ],
    },
    {
      title: "Praticar React",
      content: [
        {
          question: "O que é JSX?",
          answer: "Uma extensão da linguagem JavaScript.",
        },
        {
          question: "O React é ...",
          answer: "Uma biblioteca JavaScript para a construção de interfaces.",
        },
        {
          question: "Nomes de componentes devem iniciar com ...",
          answer: "Letra maiúscula.",
        },
        {
          question: "Podemos colocar ... dentro do JSX.",
          answer: "Expressões.",
        },
        {
          question: "O ReactDOM nos ajuda ...",
          answer:
            "Interagindo com a DOM para colocar componentes do React nela.",
        },
        {
          question: "Usamos o npm para ...",
          answer: "Gerenciar os pacotes necessários e suas dependências.",
        },
        {
          question: "Usamos props para ...",
          answer: "Passar diferentes informações para componentes.",
        },
        {
          question: "No React, usamos estado para ...",
          answer:
            "Dizer para o React quais informações quando modificadas devem renderizar a tela novamente.",
        },
      ],
    },
  ];

  const [location, setLocation] = useState("home");
  const [deckIndex, setDeckIndex] = useState(null);

  return (
    <div className="app">
      {location === "home" ? (
        <Home
          decks={decks.map((deck) => deck.title)}
          goToPage={(deckIndex) => {
            setLocation("page");
            setDeckIndex(deckIndex);
          }}
        />
      ) : (
        <Page deck={decks[deckIndex]} />
      )}
    </div>
  );
}
