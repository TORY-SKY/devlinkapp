import { useNavigate } from "react-router-dom";

import Navbar from "./Navbar";
import Logout from "../Logout";
import { useEffect, useRef, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
const ProfileDetails = () => {
  const navigate = useNavigate();
  const url = "https://mail.google.com/mail/u/0/#inbox";
  function Navigate() {
    navigate("/addLink");
  }
  // handle inputed data to be encoded
  const [inputvalue, setInputValue] = useState<string>("");
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    // setUrl(value);
  };

  const myButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (myButton.current) {
      myButton.current.focus();
    }
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Profile Details</h1>
      <div className="some-content">
        <QRCodeCanvas
          value={inputvalue} // Value to encode
          size={256} // Size of the QR Code
          bgColor="#ffffff" // Background Color
          fgColor="#000000" // Foreground (QR) Color
          level="H" // Error correction level (L, M, Q, H)
          includeMargin={true} // Includes white margin around QR
        />
        <input
          type="text"
          placeholder="input to convert to qrcode"
          onChange={handleInput}
        />
      </div>
      <form>
        <h1>CONVERT ANYTHING TO QR-CODE</h1>
      </form>
      <button
        ref={myButton}
        onClick={
          Navigate
          // disp();
        }
        className="focused-btn"
        style={{
          padding: "12px",
          backgroundColor: "none",
          border: "1px solid grey",
        }}
      >
        back home
      </button>
      <Logout />
    </div>
  );
};
// onClick={() => handleSignout()}
// onClick={handleSignout()}

export default ProfileDetails;
