import React from 'react';
import './LoadingScreen.css';
import { TbPrompt } from "react-icons/tb";

function LoadingScreen() {
  return (
    <div className="loading-screen">

      <div className="glow glow-1"></div>
      <div className="glow glow-2"></div>

      <div className="loader-content">

        <div className="logo-circle">
            <TbPrompt />
        </div>

        <h1>PromptVault</h1>

        <p>
          Curated AI Prompts
        </p>

        <div className="loader-bar">
          <div className="loader-progress"></div>
        </div>

      </div>

    </div>
  );
}

export default LoadingScreen;