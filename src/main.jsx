import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider as JotaiProvider } from "jotai";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <JotaiProvider>
      <App />
    </JotaiProvider>
  </StrictMode>,
);
