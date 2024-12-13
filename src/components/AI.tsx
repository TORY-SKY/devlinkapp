import React, { useState } from "react";
import { generateAIContent } from "../api"; // Adjust the path based on your file structure
import { MathJax, MathJaxContext } from "better-react-mathjax";
const AI: React.FC = () => {
  const [query, setQuery] = useState<string>(""); // User input
  const [response, setResponse] = useState<string>(""); // AI-generated response
  const [loading, setLoading] = useState<boolean>(false); // Loading state
  const [error, setError] = useState<string>(""); // Error state

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResponse("");

    const formula = "\\[VC(t) = V \\cdot (1 - e^{-t/RC})\\]";
    const matrix = `
      \\[
      \\begin{bmatrix}
      a & b & c & d \\\\
      e & f & g & h \\\\
      i & j & k & l \\\\
      m & n & o & p
      \\end{bmatrix}
      \\]
    `;

    try {
      const aiResponse = await generateAIContent(query);
      setResponse(aiResponse);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{ maxWidth: "600px", margin: "2rem auto", textAlign: "center" }}
    >
      <MathJaxContext>
        <h1>AI Question Answering</h1>
        <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type your question here..."
            rows={4}
            style={{ width: "100%", padding: "0.5rem", fontSize: "1rem" }}
          />
          <button
            type="submit"
            style={{
              marginTop: "0.5rem",
              padding: "0.5rem 1rem",
              fontSize: "1rem",
              cursor: "pointer",
            }}
            disabled={loading}
          >
            {loading ? "Processing..." : "Submit"}
          </button>
        </form>

        {response && (
          <MathJax>
            <div>
              <h3>AI Response:</h3>

              <p>{response}</p>
            </div>
          </MathJax>
        )}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </MathJaxContext>
    </div>
  );
};

export default AI;
