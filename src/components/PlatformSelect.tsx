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
    value: "Github",
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
  },
  {
    icon: stackoverflow,
    label: "Stackoverflow",
    value: "Stackoverflow",
  },
  {
    icon: youtube,
    label: "Youtube",
    value: "Youtube",
  },
  {
    icon: facebook,
    label: "Facebook",
    value: "Facebook",
  },
  {
    icon: codeswar,
    label: "Codeswar",
    value: "Codeswar",
  },
  {
    icon: codepen,
    label: "Codepen",
    value: "Codepen",
  },
  {
    icon: frontendMentor,
    label: "Frontend Mentor",
    value: "Frontend Mentor",
  },
  {
    icon: Devto,
    label: "Dev.to",
    value: "Dev.to",
  },
  {
    icon: gitlab,
    label: "Gitlab",
    value: "Gitlab",
  },
];

type PlatformSelectProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

// input field functional styling

//
const PlatformSelect: React.FC<PlatformSelectProps> = ({ value, onChange }) => (
  <>
    <TextField
      label="platform"
      select
      value={value}
      onChange={onChange}
      variant="outlined"
      fullWidth
      className={`menu-items `}
    >
      {platforms.map((platform) => (
        <MenuItem
          key={platform.value}
          value={platform.value}
          style={{
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid #D9D9D9",
            paddingTop: "12px",
            paddingBottom: "12px",
            paddingLeft: "12px",
            margin: "5px",
          }}
        >
          <img src={platform.icon} alt={platform.label} />

          <span
            style={{
              marginLeft: "8px",
              color: "black",
            }}
          >
            {platform.label}
          </span>
        </MenuItem>
      ))}
    </TextField>
  </>
);

export default PlatformSelect;
