import React, { useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import "pdfjs-dist/web/pdf_viewer.css";

pdfjsLib.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';


const PdfTextExtractor: React.FC = () => {
  const [pdfText, setPdfText] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setError(null); // Clear previous errors
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          const typedArray = new Uint8Array(reader.result as ArrayBuffer);
          const pdf = await pdfjsLib.getDocument(typedArray).promise;

          let extractedText = "";

          for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const textContent = await page.getTextContent();

            textContent.items.forEach((item: any) => {
              extractedText += item.str + " ";
            });
          }

          setPdfText(extractedText);
          console.log("Extracted text:", extractedText);
        } catch (error) {
          console.error("Error extracting text:", error);
          setError("Failed to extract text from PDF. Please try again.");
        }
      };

      reader.readAsArrayBuffer(file);
    } catch (error) {
      console.error("Error reading file:", error);
      setError("An error occurred while reading the file.");
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-4">PDF Text Extractor</h1>
      <input type="file" onChange={handleFileUpload} className="mb-4" />
      {error && <p className="text-red-500">{error}</p>}
      {pdfText && (
        <textarea
          value={pdfText}
          readOnly
          className="w-full p-3 border rounded-md"
          rows={10}
        />
      )}
    </div>
  );
};

export default PdfTextExtractor;
