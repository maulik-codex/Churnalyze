import React from 'react';
import './Landing.css';

function Landing({ onGetStarted }) {
  return (
    <div className="landing-wrapper">
      <div className="landing-container">
        <p className="welcome-text">Welcome to</p>
        <h1 className="main-title">Churnalyze</h1>
        <h3 className="subtitle">"Analyze Churn. Maximize Retention"</h3>
        <p className="description">
          Churnalyze is your AI-powered sidekick for catching churn before it happens.
         We break down the data, show you the "why," and help you win back hearts before customers bounce.
         Less guesswork, more retention — let’s make your growth unstoppable 💥
        </p>
        <button
          className="get-started-button"
          onClick={onGetStarted}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Landing;
