import linkIcon from "../assets/images/addlinkicon.jpg";
import { useState } from "react";
import "../index.css";
import Navbar from "./Navbar";
import { Skeleton, TextField } from "@mui/material";
import PlatformSelect from "./PlatformSelect";
import { LinkData } from "../common/Interfaces";

// type LinkData = {
//   platform: string;
//   url: string;
// };

const Addlink = () => {
  const [links, setLinks] = useState<LinkData[]>([{ platform: "", url: "" }]);
  // adding link boxes (max 3)
  const handleAddLink = () => {
    if (links.length < 3) {
      setLinks([...links, { platform: "", url: "" }]);
    }
  };
  // Remove button
  const handleRemoveLink = (index: number) => {
    // copy of all the links
    const allLinks = [...links];
    // remove added
    const UpdatedLinks = allLinks.filter((_, i) => i !== index);
    setLinks(UpdatedLinks);
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
  const [isDisbled, setIsDisbled] = useState(false);

  const CheckInputLink = () => {
    const updatedLinks = [...links];
    if (!updatedLinks) {
      alert("hello world");
      setIsDisbled(true);
      console.log("display this");
    }
  };
  return (
    <>
      <div className="nav-bar">
        <Navbar />
      </div>
      <div className="add-link-container">
        <div className="left-side">
          <div className="place-holder">
            <div className="profile-skeleton">
              <Skeleton
                variant="circular"
                width={96}
                height={96}
                style={{ marginBottom: "25px" }}
              />
              <Skeleton
                variant="rectangular"
                width={160}
                height={16}
                style={{ borderRadius: "8px" }}
              />
              <Skeleton
                variant="rectangular"
                width={72}
                height={8}
                style={{ borderRadius: "8px", marginTop: "13px" }}
              />
            </div>
            <Skeleton
              variant="rectangular"
              width={237}
              height={44}
              style={{ borderRadius: "8px", marginBottom: "25px" }}
            />
            <Skeleton
              variant="rectangular"
              width={237}
              height={44}
              style={{ borderRadius: "8px", marginBottom: "25px" }}
            />
            <Skeleton
              variant="rectangular"
              width={237}
              height={44}
              style={{ borderRadius: "8px", marginBottom: "25px" }}
            />
          </div>
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
              <div className={`link-input-container`}>
                {links.map((link, index) => (
                  <div key={index} className={`add-links`}>
                    <div className="description">
                      <span>= Link {index + 1}</span>
                      <button
                        className="Remove-btn"
                        onClick={() => {
                          handleRemoveLink(index);
                        }}
                      >
                        Remove
                      </button>
                    </div>
                    <div
                      className="platform-st"
                      style={{ marginBottom: "12px", marginTop: "12px" }}
                    >
                      <PlatformSelect
                        value={link.platform}
                        onChange={(e) =>
                          handleLinkChange(index, "platform", e.target.value)
                        }
                      />
                    </div>
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
                links.length < 1 ? "show-this" : "hide-this"
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
          <div className={`save-button-container`}>
            <hr />
            <button
              className={`save-link-btn ${
                isDisbled ? "button-enabled" : "button-disabled"
              }`}
              onClick={CheckInputLink}
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
