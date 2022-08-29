import React from "react";
import ReactDOM from "react-dom/client";
import "@styles/style.scss";
import App from "./views/App";
import { CustomStyle } from "./components/CustomStyle";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CustomStyle>
      <App />
    </CustomStyle>
  </React.StrictMode>
);
