import pdfToText from "react-pdftotext";
import { useLinkContext } from "../common/LinkContextAPI";

const PdfTextExtractor = () => {
  const { pdfQuery, setPdfQuery } = useLinkContext();
  function extractText(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    pdfToText(file).then((text) => {
      console.log(text);
      setPdfQuery(text.trim());

      console.log("this is the extracted text");
    });
  }
  return (
    <div>
      <h1>input a pdf file for DeepSeek AI</h1>
      <input type="file" accept="application/pdf" onChange={extractText} />
      <h2>Extracted Text</h2>
      <div>{pdfQuery}</div>
    </div>
  );
};

export default PdfTextExtractor;
