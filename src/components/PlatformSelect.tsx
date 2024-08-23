import { MenuItem, TextField } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { HTML5Backend } from "react-dnd-html5-backend";
// Import other icons as needed

type PlatformOption = {
  label: string;
  value: string;
  icon: JSX.Element;
};

const platforms: PlatformOption[] = [
  { label: "GitHub", value: "github", icon: <GitHubIcon /> },
  { label: "Facebook", value: "facebook", icon: <FacebookIcon /> },
  { label: "YouTube", value: "youtube", icon: <YouTubeIcon /> },
  // Add other platforms
];

type PlatformSelectProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const PlatformSelect: React.FC<PlatformSelectProps> = ({ value, onChange }) => (
  <TextField
    select
    label="Select Platform"
    value={value}
    onChange={onChange}
    variant="outlined"
    fullWidth
  >
    {platforms.map((platform) => (
      <MenuItem key={platform.value} value={platform.value}>
        {platform.icon}
        {platform.label}
      </MenuItem>
    ))}
  </TextField>
);

export default PlatformSelect;
