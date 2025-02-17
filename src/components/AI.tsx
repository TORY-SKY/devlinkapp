import React, { useState } from "react";
import { generateAIContent } from "../api"; // Adjust the path based on your file structure
import { MathJax, MathJaxContext } from "better-react-mathjax";
import PdfTextExtractor from "../aiFeatures/PdfTextExtractor";
import Navbar from "./Navbar";
import "../common/cssFile/AIchatbot.css"; // Updated CSS file

const AI: React.FC = () => {
  const [query, setQuery] = useState<string>(""); // User input
  const [response, setResponse] = useState<string>(""); // AI-generated response
  const [loading, setLoading] = useState<boolean>(false); // Loading state
  const [error, setError] = useState<string>(""); // Error state

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError("");
    setResponse("");

    try {
      const aiResponse = await generateAIContent(query);
      setResponse(aiResponse);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleEnterKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="ai-chat-container">
      <Navbar />
      <PdfTextExtractor />

      <MathJaxContext>
        <div className="ai-chat-box">
          <h1 className="ai-title">AI Question Answering</h1>

          {response && (
            <MathJax>
              <div className="ai-chat-window">
                <h3 className="ai-response-title">AI Response:</h3>
                <p className="ai-response">{response}</p>
              </div>
            </MathJax>
          )}

          <form onSubmit={handleSubmit} className="ai-input-area">
            <textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleEnterKey}
              placeholder="Type your question here..."
              rows={4}
              className="ai-input"
            />
            <button type="submit" className="ai-send-button" disabled={loading}>
              {loading ? "Processing..." : "Submit"}
            </button>
          </form>

          {error && <p className="ai-error-message">{error}</p>}
        </div>
      </MathJaxContext>
    </div>
  );
};

export default AI;
