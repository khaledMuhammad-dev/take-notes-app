import styles from "./Navbar.module.scss";
import { useToggle } from "@/utils/hooks";
const { burger_menu, main_nav, active_x, active, active_arrow} = styles;

export const Navbar = () => {
  const [toggle, handleToggle] = useToggle();
  const buttonClass = toggle ? `${burger_menu} ${active} ${active_x}` : burger_menu;

  return (
    <nav className={main_nav}>
      <div className="container">
        <button className={buttonClass} onClick={handleToggle}>
          <i />
        </button>
      </div>
    </nav>
  );
};
