import Phone from "../assets/images/Subtract.png";
import linkIcon from "../assets/images/addlinkicon.jpg";
import { useState } from "react";
import "../index.css";
import Navbar from "./Navbar";
import { Button, TextField } from "@mui/material";
import PlatformSelect from "./PlatformSelect";

type LinkData = {
  platform: string;
  url: string;
};

const Addlink = () => {
  const [links, setLinks] = useState<LinkData[]>([{ platform: "", url: "" }]);

  const handleAddLink = () => {
    setLinks([...links, { platform: "", url: "" }]);
    setAddLink(true);
  };

  const handleLinkChange = (
    index: number,
    key: keyof LinkData,
    value: string
  ) => {
    const updatedLinks = [...links];
    updatedLinks[index][key] = value;
    setLinks(updatedLinks);
  };
  // button enabled/disabled state
  const [addLink, setAddLink] = useState<boolean>(false);
  const [isDisbled, setIsDisbled] = useState(false);
  const checkBtnState = () => {
    setIsDisbled(!isDisbled);
  };
  return (
    <>
      <Navbar />
      <div className="add-link-container">
        <div className="left-side">
          <img src={Phone} alt="Phone" />
        </div>
        <div className="right-side">
          <div className="right-side-top">
            <h1 className="header-text">Customize your links</h1>
            <p className="body-m add-edit-remove-link">
              Add/edit/remove links below and then share all your profiles with
              the world!
            </p>
          </div>
          <button className="add-link-btn" onClick={handleAddLink}>
            + Add new link
          </button>
          <div className="adding-links-struc">
            <div className="add-links-structure">
              <div style={{}}>
                {links.map((link, index) => (
                  <div
                    key={index}
                    // style={{
                    //   display: "flex",
                    //   marginBottom: "10px",
                    //   gap: "10px",
                    // }}
                  >
                    <PlatformSelect
                      value={link.platform}
                      onChange={(e) =>
                        handleLinkChange(index, "platform", e.target.value)
                      }
                    />
                    <TextField
                      label="Link"
                      value={link.url}
                      onChange={(e) =>
                        handleLinkChange(index, "url", e.target.value)
                      }
                      variant="outlined"
                      fullWidth
                    />
                  </div>
                ))}
              </div>
            </div>
            <div
              className={`add-link-btn-container ${
                addLink ? "hide-placeholder" : ""
              }`}
            >
              <div className="pretext-container">
                <img src={linkIcon} alt="link-icon" />
                <h1 className="header-text">Let’s get you started</h1>
                <p className="body-m">
                  Use the “Add new link” button to get started. Once you have
                  more than one link, you can reorder and edit them. We’re here
                  to help you share your profiles with everyone!
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
      </div>
    </>
  );
};
export default Addlink;
