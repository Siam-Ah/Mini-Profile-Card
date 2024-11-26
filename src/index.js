import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "Goal-scoring",
    level: "advanced",
    color: "red",
  },
  {
    skill: "Strength",
    level: "advanced",
    color: "green",
  },
  {
    skill: "Team-play",
    level: "intermediate",
    color: "blue",
  },
  {
    skill: "Speed",
    level: "advanced",
    color: "yellow",
  },
  {
    skill: "Positioning",
    level: "advanced",
    color: "pink",
  },
  {
    skill: "Work ethic",
    level: "advanced",
    color: "orange",
  },
];

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
      {skills.map((skill) => (
        <Skill skillObj={skill} key={skill.skill} />
      ))}
      {/* <Skill skill="Goal-Scoring" color="red" emoji="🥅" />
      <Skill skill="Strength" color="green" emoji="💪" />
      <Skill skill="Team Play" color="blue" emoji="🥇" />
      <Skill skill="Speed" color="yellow" emoji="🏃" />
      <Skill skill="Positioning" color="pink" emoji="🧘‍♂️" />
      <Skill skill="Work Ethic" color="orange" emoji="👔" /> */}
    </div>
  );
}

function Skill({ skillObj }) {
  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.skill}</span>
      <span>
        {skillObj.level === "advanced"
          ? "💪"
          : skillObj.level === "intermediate"
          ? "👍"
          : "👶"}
      </span>
      {/* <span>{props.emoji}</span> */}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
