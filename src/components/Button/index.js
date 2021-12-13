import "./style.css";

import next from "../../assets/next.png";

export default function Button({ identifier, text, action }) {
  return (
    <button className="button" data-identifier={identifier} onClick={action}>
      <div className="content">
        <span className="text">{text}</span>
        <img className="next-icon" src={next} alt="Next Icon" />
      </div>
    </button>
  );
}
