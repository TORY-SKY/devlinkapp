import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import PlatformSelect from "./PlatformSelect";

type LinkData = {
  platform: string;
  url: string;
};

const AddLinkComponent: React.FC = () => {
  const [links, setLinks] = useState<LinkData[]>([{ platform: "", url: "" }]);

  const handleAddLink = () => {
    setLinks([...links, { platform: "", url: "" }]);
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