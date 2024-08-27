import React from "react";
import { MenuItem, TextField } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Import other icons as needed

type PlatformOption = {
  label: string;
  value: string;
  backgroundColor?: string; // Optional background color
};

const platforms: PlatformOption[] = [
  {
    label: "GitHub",
    value: "github",
    backgroundColor: "#24292e",
  }, // GitHub dark background
  {
    label: "Facebook",
    value: "facebook",
    backgroundColor: "#1877f2",
  }, // Facebook blue background
  {
    label: "YouTube",
    value: "youtube",
    backgroundColor: "#ff0000",
  }, // YouTube red background

  // Add other platforms with custom backgrounds if needed
];

type PlatformSelectProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const PlatformSelect: React.FC<PlatformSelectProps> = ({ value, onChange }) => (
  <TextField
    select
    value={value}
    onChange={onChange}
    variant="outlined"
    fullWidth
  >
    {platforms.map((platform) => (
      <MenuItem
        key={platform.value}
        value={platform.value}
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: platform.backgroundColor, // Apply the custom background color
          color: "white", // Ensure the text is visible
        }}
      >
        {platform.icon}
        <span style={{ marginLeft: "8px" }}>{platform.label}</span>
      </MenuItem>
    ))}
  </TextField>
);

export default PlatformSelect;
