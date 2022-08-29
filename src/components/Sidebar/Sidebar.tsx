import React, { useRef, MouseEvent, MouseEventHandler } from "react";
import { Stack, useTheme, IconButton } from "@mui/material";
// Components ---
import { Button, TextInput } from "@components/inputs";
import { Navlinks } from "@/components/Sidebar/Navlinks";
import BodyPortal from "@components/BodyPortal";
import { Overlay } from "@components/Overlay";
import styles from "./Sidebar.module.scss";
// Icons ------
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

interface ISidebar {
  matchQuery: boolean;
  handleToggle: (val?: boolean) => void;
}

export const Sidebar = React.forwardRef<HTMLDivElement, ISidebar>(
  ({ matchQuery, handleToggle }, ref) => {
    const { wrapper, container } = styles;
    const theme = useTheme();

    const handleOverlay = (e: MouseEvent<HTMLDivElement>) => {
      const containerEl = document.querySelector(
        "." + container
      ) as HTMLDivElement;
      if (!containerEl.contains(e.target as Node)) {
        handleToggle(false);
      }
    };

    return (
      <div className={wrapper} ref={ref} onClick={handleOverlay}>
        <div className={container}>
          <Stack
            color={theme.customColors.textColor}
            alignItems="center"
            direction="row"
          >
            <h1 style={{ textTransform: "uppercase" }}>Logo</h1>
            <IconButton
              aria-label="Dark mode toggle"
              sx={{
                display: "flex",
                marginLeft: "auto",
                color: theme.customColors.textColor,
              }}
            >
              <WbSunnyIcon role="img" aria-hidden="true" />
            </IconButton>
          </Stack>

          <Stack my={4} className="search-new_note">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <TextInput aria-label="Search" />
            </form>

            <Button color="info" startIcon={<NoteAddIcon />}>
              Add Note
            </Button>
          </Stack>
          <Navlinks />
        </div>

        {!matchQuery && (
          <BodyPortal>
            <Overlay />
          </BodyPortal>
        )}
      </div>
    );
  }
);
