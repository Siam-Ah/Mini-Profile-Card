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
  return <img className="avatar" src="haaland.jpg" alt="Erling Haaland" />;
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
      <Skill skill="Goal-Scoring" color="red" emoji="🥅" />
      <Skill skill="Strength" color="green" emoji="💪" />
      <Skill skill="Team Play" color="blue" emoji="🥇" />
      <Skill skill="Speed" color="yellow" emoji="🏃" />
      <Skill skill="Positioning" color="pink" emoji="🧘‍♂️" />
      <Skill skill="Work Ethic" color="orange" emoji="👔" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
