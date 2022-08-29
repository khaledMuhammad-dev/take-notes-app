import { Button } from "@components/inputs";
import HomeIcon from "@mui/icons-material/Home";
import DescriptionIcon from "@mui/icons-material/Description";
import DeleteIcon from "@mui/icons-material/Delete";
import SettingsIcon from "@mui/icons-material/Settings";

export const Navlinks = () => {
  return (
    <div>
      <ul aria-label="main content links">
        <li>
          <Button role="link" component="a" startIcon={<HomeIcon />}>
            Home
          </Button>
        </li>
        <li>
          <Button role="link" component="a" startIcon={<DescriptionIcon />}>
            Notes
          </Button>
        </li>
        <li>
          <Button role="link" component="a" startIcon={<DeleteIcon />}>
            Trash
          </Button>
        </li>
      </ul>

      <div className="hl"></div>

      <ul aria-label="settings">
        <li>
          <Button role="link" component="a" startIcon={<SettingsIcon />}>
            Settings
          </Button>
        </li>
      </ul>
    </div>
  );
};
