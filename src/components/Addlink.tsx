import Navbar from "./Navbar";
import Phone from "../assets/images/Subtract.png";
import linkIcon from "../assets/images/addlinkicon.jpg";
import { useState } from "react";
import "../index.css";

const Addlink = () => {
  // button enabled/disabled state
  const [isDisbled, setIsDisbled] = useState(false);
  const checkBtnState = () => {
    setIsDisbled(!isDisbled);
  };
  return (
    <>
      <div className="add-link-container">
        {/* <div className="left-side"><img src={Phone} alt="Phone" /></div> */}
        <div className="right-side">
          <div className="right-side-top">
            <h1 className="header-text">Customize your links</h1>
            <p className="body-m add-edit-remove-link">
              Add/edit/remove links below and then share all your profiles with
              the world!
            </p>
          </div>
          <button className="add-link-btn">+ Add new link</button>
          <div className="add-link-btn-container">
            <div className="pretext-container">
              <img src={linkIcon} alt="link-icon" />
              <h1 className="header-text">Let’s get you started</h1>
              <p className="body-m">
                Use the “Add new link” button to get started. Once you have more
                than one link, you can reorder and edit them. We’re here to help
                you share your profiles with everyone!
              </p>
            </div>
          </div>
        </div>
        <div className="save-button-container">
          <hr />
          <button
            className={`save-link-btn ${
              isDisbled ? "button-enabled" : "button-disabled"
            }`}
            onClick={checkBtnState}
            disabled={isDisbled}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};
export default Addlink;
