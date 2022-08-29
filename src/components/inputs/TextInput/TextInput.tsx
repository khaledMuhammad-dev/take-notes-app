import { useTheme, TextField } from "@mui/material";
// import { FC } from "react";

const SearchInput = ({ ...props }) => {
  const theme = useTheme();

  return (
    <TextField
      fullWidth
      autoComplete="off"
      size="small"
      placeholder="Search"
      sx={{
        mb: 1,
        "& .MuiFilledInput-underline::after": {
          content: "none",
        },

        "& .MuiFilledInput-underline::before": {
          content: "none",
        },

        "& .MuiFilledInput-input ": {
          padding: "10px 0.875rem",
        },
      }}
      InputProps={{
        sx: {
          fontSize: "0.875rem",
          color: theme.customColors.textColor,
        },
      }}
      variant="filled"
      name="search"
      {...props}
    />
  );
};

export default SearchInput;
