import { useEffect } from "react";
import { useToggle } from "@/utils/hooks";
import { Slide, Theme, useMediaQuery } from "@mui/material";
import { Navbar } from "@components/Navbar/Navbar";
import { Sidebar } from "@components/Sidebar/Sidebar";

export const Header = () => {
  const [toggle, handleToggle] = useToggle();
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"));

  useEffect(() => {
    const handleResize = () => handleToggle(false);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleToggle]);

  return (
    <header>
      {!matches ? (
        <>
          <Navbar toggle={toggle} handleToggle={handleToggle} />
          <Slide direction="right" mountOnEnter unmountOnExit in={toggle}>
            <Sidebar matchQuery={matches} handleToggle={handleToggle} />
          </Slide>
        </>
      ) : (
        <Sidebar matchQuery={matches} handleToggle={handleToggle} />
      )}
    </header>
  );
};
