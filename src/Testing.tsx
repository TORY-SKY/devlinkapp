// src/App.tsx
import React from "react";
import "./common/cssFile/testing.css";

const Testing: React.FC = () => {
  return (
    <div className="container">
      {/* Left Panel: Sidebar */}
      <div className="sidebar">
        <h2>New Chat</h2>
        <ul className="chat-list">
          {Array.from({ length: 20 }, (_, i) => (
            <li key={i}>Recent Chat {i + 1}</li>
          ))}
        </ul>
      </div>

      {/* Right Panel: Main Content */}
      <div className="content">
        <h1>Chat Window</h1>
        <p>This is where the chat responses and prompts will go.</p>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam,
          doloribus, eaque necessitatibus asperiores amet impedit sequi, fugit
          soluta omnis ipsum at dolores voluptate? Dolorum odit, assumenda a
          unde dignissimos rem!
        </div>
        
      </div>
    </div>
  );
};

export default Testing;
