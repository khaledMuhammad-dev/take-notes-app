import { FC } from "react";
import { Button, ButtonProps, StyledEngineProvider } from "@mui/material";

interface ICustomButton extends ButtonProps {
  component?: string;
}

const CustomButton: FC<ICustomButton> = ({
  children,
  component,
  startIcon,
  sx,
  ...props
}) => {
  const styleRules = {
    justifyContent: "flex-start",
    paddingInline: "0.875rem",
    fontSize: "0.875rem",
    textTransform: "capitalize" as "capitalize",
    "&:active": {
      color: `${props.color || "primary"}.contrastText`,
    },
    ...sx,
  };
  return (
    <StyledEngineProvider injectFirst>
      <Button
        size="small"
        variant="contained"
        disableElevation
        fullWidth
        sx={styleRules}
        component={component as any}
        startIcon={startIcon}
        {...props}
      >
        {children}
      </Button>
    </StyledEngineProvider>
  );
};

export default CustomButton;
