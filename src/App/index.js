import { useState } from "react";
import Home from "./Home";
import Page from "./Page";

import "./style.css";

export default function App() {
  const [location, setLocation] = useState("home");

  return (
    <div className="app">
      {location === "home" ? (
        <Home goToPage={() => setLocation("page")} />
      ) : (
        <Page />
      )}
    </div>
  );
}
