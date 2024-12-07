import axios from "axios";

const API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent";
const API_KEY = "YOUR_API_KEY"; // Replace with your actual API key

export const generateAIContent = async (userQuery: string): Promise<string> => {
  const payload = {
    contents: [
      {
        parts: [
          {
            text: userQuery,
          },
        ],
      },
    ],
  };

  try {
    const response = await axios.post(`${API_URL}?key=${API_KEY}`, payload, {
      headers: { "Content-Type": "application/json" },
    });
    // Extract and return the AI's generated content
    return response.data.generatedContent || "No response from the AI.";
  } catch (error) {
    console.error("Error fetching AI response:", error);
    throw new Error("Failed to fetch AI response.");
  }
};
