import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Logout from "../Logout";
import { useEffect, useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "../common/cssFile/QrCodeConverter.css"; // Import updated CSS

const QrCodeConverter: React.FC = () => {
  const navigate = useNavigate();

  // Handle user input to be encoded
  const [inputValue, setInputValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Auto-focus input field on component mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="qr-container" >
      <Navbar />

      <div className="qr-box">
        <h1 className="qr-title">QR Code Generator</h1>

        <div className="qr-content">
          <QRCodeCanvas
            value={inputValue || " "}
            size={256}
            bgColor="#ffffff"
            fgColor="#000000"
            level="H"
            includeMargin={true}
            className="qr-code"
          />

          <input
            type="text"
            ref={inputRef}
            className="qr-input"
            placeholder="Enter text, URL, or data..."
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>

        <button
          ref={buttonRef}
          onClick={() => navigate("/addLink")}
          className="qr-home-button"
        >
          Go Back
        </button>
      </div>

      <Logout />
    </div>
  );
};

export default QrCodeConverter;
