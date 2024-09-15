import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import PlatformSelect from "./PlatformSelect";
import { LinkData } from "../common/Interfaces";
import Addlink from "./Addlink";
import { useLinkContext } from "../common/LinkContextAPI";

// type LinkData = {
//   platform: string;
//   url: string;
// };
const platform = [
  { name: "Facebook", color: "#3b5998" },
  { name: "Twitter", color: "#1da1f2" },
];

const AddLinkComponent: React.FC = () => {
  const { addLink } = useLinkContext();
  const [platform, setPlatform = useState("")];
  const [url, setUrl] = useState("");
  const [idCounter, setIdCounter] = useState("");

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {links.map((link, index) => (
        <div
          key={index}
          style={{ display: "flex", marginBottom: "10px", gap: "10px" }}
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
            onChange={(e) => handleLinkChange(index, "url", e.target.value)}
            variant="outlined"
            fullWidth
          />
        </div>
      ))}
      <Button variant="contained" color="primary" onClick={handleAddLink}>
        Add Link
      </Button>
    </div>
  );
};

export default AddLinkComponent;
