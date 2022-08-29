import styles from "./Navbar.module.scss";
import { Button } from "@mui/material";
import { FC } from "react";
const {
  burger_menu,
  main_nav,
  active_x,
  active,
  // active_arrow
} = styles;

interface INavbar {
  toggle: boolean;
  handleToggle: () => void;
}
export const Navbar: FC<INavbar> = ({ toggle, handleToggle }) => {
  const buttonClass = toggle
    ? `${burger_menu} ${active} ${active_x}`
    : burger_menu;

  return (
    <nav className={main_nav}>
      <div className="container">
        <Button
          disableFocusRipple
          sx={{
            minWidth: "0",
          }}
          aria-expanded={toggle}
          aria-label="main navigation toggle"
          className={buttonClass}
          onClick={handleToggle}
        >
          <i aria-hidden="true" role="img" />
        </Button>
      </div>
    </nav>
  );
};
