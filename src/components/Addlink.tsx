import linkIcon from "../assets/images/addlinkicon.jpg";
import { useState } from "react";
import "../index.css";
import Navbar from "./Navbar";
import { TextField } from "@mui/material";
import PlatformSelect from "./PlatformSelect";
import { useLinkContext } from "../common/LinkContextAPI";
import { LinkData } from "../common/Interfaces";
import FetchedLinks from "../common/FetchedLinks";
import "../common/cssFile/links.css";
import { useUser } from "../common/LoginContext";
import {
  UserDisplayEmail,
  UserDisplayName,
  UserSkeleton,
} from "../common/Skeloton";
import { motion } from "framer-motion";

const Addlink = () => {
  const [links, setLinks] = useState<LinkData[]>([
    { platform: "", url: "", id: "" },
  ]);

  const handleAddLink = () => {
    if (links.length < 3) {
      setLinks([...links, { platform: "", url: "", id: "" }]);
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
    if (value == "") {
      setIsDisbled(true);
    } else {
      setIsDisbled(false);
    }
  };
  // button enabled/disabled state
  const [isDisbled, setIsDisbled] = useState<boolean>(true);
  const { addLink } = useLinkContext();

  const SaveLink = () => {
    setIsDisbled(true);
    // error down here
    addLink(links);
    setLinks([{ platform: "", url: "", id: "" }]);
  };
  const { theUser } = useUser();

  return (
    <>
      <div className="nav-bar">
        <Navbar />
      </div>
      <div className="add-link-container">
        <div className="left-side">
          <div className="place-holder">
            <div className="profile-skeleton">
              <div
                style={{
                  borderRadius: "50px",
                  overflow: "hidden",
                  width: "96px",
                  height: "96px",
                }}
              >
                {theUser?.photoURL ? (
                  <img src={theUser.photoURL} alt="user display picture" />
                ) : (
                  <UserSkeleton />
                )}
              </div>

              <div>
                {theUser?.displayName ? (
                  <h3
                    className="user display picture"
                    style={{ fontSize: "1.5rem" }}
                  >
                    {theUser.displayName}
                  </h3>
                ) : (
                  <UserDisplayName />
                )}
              </div>
              <div>
                <h1>{theUser?.phoneNumber}</h1>
              </div>
              <div>
                {theUser?.email ? (
                  <p
                    className="user display picture"
                    style={{ fontSize: "0.9rem", color: "#737373" }}
                  >
                    {theUser.email}
                  </p>
                ) : (
                  <UserDisplayEmail />
                )}
              </div>
            </div>
            <div className="real-time-data">
              <FetchedLinks />
            </div>
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
          <motion.button
            initial={{ x: "-100vw" }}
            animate={{ y: 0, opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 1.7 }}
            className="add-link-btn"
            onClick={handleAddLink}
          >
            + Add new link
          </motion.button>
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
                isDisbled ? "button-disabled" : "button-enabled"
              }`}
              onClick={SaveLink}
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
