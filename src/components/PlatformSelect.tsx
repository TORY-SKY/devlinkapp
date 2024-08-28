import React from "react";
import { MenuItem, TextField } from "@mui/material";

import github from "../assets/images/dropdownimg/gith.png";
import linkedin from "../assets/images/dropdownimg/linkd.png";
import twitter from "../assets/images/dropdownimg/twitter.png";
import frontendMentor from "../assets/images/dropdownimg/fronte.png";
import Devto from "../assets/images/dropdownimg/Devto.png";
import codepen from "../assets/images/dropdownimg/codepen.svg";
import codeswar from "../assets/images/dropdownimg/codesw.svg";
import facebook from "../assets/images/dropdownimg/faceb.png";
import freecodecamp from "../assets/images/dropdownimg/freecodecamp.png";
import gitlab from "../assets/images/dropdownimg/gitlab.svg";
import stackoverflow from "../assets/images/dropdownimg/stackoverflow.png";
import youtube from "../assets/images/dropdownimg/yout.png";

// Import other icons as needed

type PlatformOption = {
  icon: string;
  label: string;
  value: string;
};

const platforms: PlatformOption[] = [
  {
    icon: github,
    label: "GitHub",
    value: "github",
  }, // GitHub dark background
  {
    icon: linkedin,
    label: "Linkedin",
    value: "Linkedin",
  }, // Facebook blue background
  {
    icon: twitter,
    label: "Twitter",
    value: "Twitter",
  }, // YouTube red background
  {
    icon: freecodecamp,
    label: "Freecodecamp",
    value: "Freecodecamp",
  }, // Freecodecamp red background

  // Add other platforms with custom backgrounds if needed
];

type PlatformSelectProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const PlatformSelect: React.FC<PlatformSelectProps> = ({ value, onChange }) => (
  <>
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
            color: "white", // Ensure the text is visible
          }}
        >
          <img src={platform.icon} alt={platform.label} />
          <span style={{ marginLeft: "8px" }}>{platform.label}</span>
        </MenuItem>
      ))}
    </TextField>
  </>
);

export default PlatformSelect;
