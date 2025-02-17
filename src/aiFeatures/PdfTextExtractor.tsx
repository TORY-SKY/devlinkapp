import pdfToText from "react-pdftotext";
import { useLinkContext } from "../common/LinkContextAPI";
import { useState } from "react";
import { FileText, UploadCloud } from "lucide-react";
import "../common/cssFile/PdfTextExtractor.css"; // Custom CSS file

const PdfTextExtractor = () => {
  const { pdfQuery, setPdfQuery } = useLinkContext();
  const [fileName, setFileName] = useState<string | null>(null);

  function extractText(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    pdfToText(file).then((text) => {
      console.log(text);
      setPdfQuery(text.trim());
      console.log("This is the extracted text");
    });
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Upload a PDF for DeepSeek AI</h1>
        <label className="upload-box">
          <UploadCloud className="icon" />
          <span>Click to upload or drag & drop</span>
          <input type="file" accept="application/pdf" onChange={extractText} className="hidden" />
        </label>
        {fileName && (
          <p className="file-name">
            <FileText className="icon" /> {fileName}
          </p>
        )}
        <h2>Extracted Text</h2>
        <div className="text-container">
          {pdfQuery || <span className="placeholder">No text extracted yet.</span>}
        </div>
      </div>
    </div>
  );
};

export default PdfTextExtractor;
