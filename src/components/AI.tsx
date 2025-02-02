import React, { useState } from "react";
import { generateAIContent } from "../api"; // Adjust the path based on your file structure
import { MathJax, MathJaxContext } from "better-react-mathjax";
import Logout from "../Logout";
import { useLinkContext } from "../common/LinkContextAPI";
import PdfTextExtractor from "../aiFeatures/PdfTextExtractor";

const AI: React.FC = () => {
  const [query, setQuery] = useState<string>(""); // User input
  const [response, setResponse] = useState<string>(""); // AI-generated response
  const [loading, setLoading] = useState<boolean>(false); // Loading state
  const [error, setError] = useState<string>(""); // Error state

  // const students: StudentData[] = [
  //   { name: "DUROJAYE OPEYEMI", matricNo: "F2408113" },
  //   { name: "IDOWU VICTOR", matricNo: "20190702030095" },
  //   { name: "KEHINDE OLUWAFEMI", matricNo: "2020232040079" },
  //   { name: "AJIBIKE MICHAEL", matricNo: "2020232040030" },
  //   { name: "ADESHINA FEMI", matricNo: "2020232040048" },
  //   { name: "ABIODUN AZEEZ", matricNo: "2020232040073" },
  //   { name: "ADEDAMOLA OGUNJOBI", matricNo: "20200702030033" },
  //   { name: "OLAPOJOYE GBENGA", matricNo: "2020232040032" },
  //   { name: "OLUWATIMILEHIN DANIEL", matricNo: "2020232040036" },
  //   { name: "ADESOLA MICHEAL", matricNo: "2020232040038" },
  //   { name: "ABDULHAMMID ABDULQUADRI", matricNo: "20200702030158" },
  //   { name: "OGBONNAYA JOSEPH", matricNo: "2020232040044" },
  //   { name: "OLANIPEKUN ABIODUN", matricNo: "F2407385" },
  //   { name: "AYODELE TEMITOPE", matricNo: "F2415399" },
  //   { name: "OSENI OLAMILEKAN", matricNo: "F2403328" },
  //   { name: "OLAJIDE AFEEZ", matricNo: "F2409579" },
  //   { name: "OLAPADE MOSES", matricNo: "2024212050105" },
  //   { name: "ADELERE MUIZ", matricNo: "2020232040116" },
  //   { name: "AKINTOKUNBO TOMIWA", matricNo: "202023240045" },
  //   { name: "JESUGBOHUNMI OLAMIDE", matricNo: "F2411625" },
  //   { name: "ADESINA TIMOTHY", matricNo: "F2405158" },
  //   { name: "GBADEBO ABIODUN", matricNo: "20200702030155" },
  //   { name: "AMUSAT QUADRI ADEBARE", matricNo: "2020232040063" },
  //   { name: "BAKARE OLUWASEGUN", matricNo: "20200702030079" },
  //   { name: "BALOGUN ADEMOLA", matricNo: "20200702030077" },
  //   { name: "OLATUNJI DAMILARE", matricNo: "2020232040060" },
  //   { name: "OLADIMEJI OREOLUWA", matricNo: "2018702030183" },
  //   { name: "OGUNJOBI ADEDAMOLA BABATUNDE", matricNo: null }, // No matric no provided
  //   { name: "BELLO BASIT", matricNo: "20200702030056" },
  //   // { name: "BELLO BASIT", matricNo: "20200702030056" },
  // ];

  // Example of mapping through the data

  // const sortedStudents = [...students].sort((a, b) =>
  //   a.name.localeCompare(b.name)
  // );

  const { pdfQuery } = useLinkContext();

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    setResponse("");

    try {
      const aiResponse = await generateAIContent(query && pdfQuery);
      setResponse(aiResponse);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const EnterKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key == "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };
  return (
    <div
      style={{ maxWidth: "600px", margin: "2rem auto", textAlign: "center" }}
    >
      <PdfTextExtractor />
      <MathJaxContext>
        <h1>AI Question Answering</h1>
        <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={EnterKey}
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

              <p style={{ border: "1px solid grey" }}>{response}</p>
            </div>
          </MathJax>
        )}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </MathJaxContext>
      <Logout />
    </div>
  );
};

export default AI;
