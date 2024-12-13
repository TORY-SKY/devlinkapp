import axios from "axios";

const API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent";
const GEM = import.meta.env.VITE_GEMINI; // Replace with your actual API key

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
    const response = await axios.post(`${API_URL}?key=${GEM}`, payload, {
      headers: { "Content-Type": "application/json" },
    });
    const theResponse = response.data;
    // Extract and return the AI's generated content
    return (
      theResponse.candidates[0].content.parts[0].text || "no response bro, wtf"
    );
  } catch (error) {
    console.error("Error fetching AI response:", error);
    throw new Error("Failed to fetch AI response.");
  }
};
