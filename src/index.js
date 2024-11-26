import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img className="avatar" src="haaland.jpg" alt="Erling Haaland" />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Erling Haaland</h1>
      <p>
        Erling Haaland, born July 21, 2000, is a Norwegian striker for
        Manchester City and Norway. Known for his speed, strength, and
        finishing, he’s one of football’s brightest talents.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <p style={{ backgroundColor: "blue" }} className="skill">
        Goal-Scoring
      </p>
      <p style={{ backgroundColor: "yellow" }} className="skill">
        Strength
      </p>
      <p style={{ backgroundColor: "green" }} className="skill">
        Speed
      </p>
      <p style={{ backgroundColor: "pink" }} className="skill">
        Positioning
      </p>
      <p style={{ backgroundColor: "cyan" }} className="skill">
        Work Ethic
      </p>
      <p style={{ backgroundColor: "orange" }} className="skill">
        Team Play
      </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
