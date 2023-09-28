import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="speech.jpg" alt="Will" />;
}

function Intro() {
  return (
    <div>
      <h1>William Chan</h1>
      <p>
        Front-end web developer who just graduated from Le Wagon Montreal. When
        not coding, I like to go on dates with my wife and dog, Alto or browse
        to ebay to grow my money collection.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML + CSS" emoji="💪🏼" color="#4284f5" />
      <Skill skill="Javascript" emoji="💪🏼" color="yellow" />
      <Skill skill="Ruby" emoji="💪🏼" color="red" />
      <Skill skill="Git and Github" emoji="👍🏼" color="orange" />
      <Skill skill="React" emoji="👶🏻" color="#42bff5" />
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
