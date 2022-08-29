import { Box } from "@mui/system";
import { FC } from "react";

interface IOverlay {
  handleToggle?: (val?: boolean) => void;
}
export const Overlay: FC<IOverlay> = ({ handleToggle }) => {
  return (
    <Box
      onClick={handleToggle ? () => handleToggle(false) : () => null}
      className="overlay"
      sx={{
        position: "fixed",
        left: "0",
        top: "0",
        width: "100vw",
        height: "100vh",
        background: "hsl(0, 0%, 0%, 25%)",
      }}
    ></Box>
  );
};
