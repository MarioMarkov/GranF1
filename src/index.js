import React from "react";
import "./index.css";
import App from "./App";
import "./i18n/config";

import { createRoot, hydrateRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);

if (container.hasChildNodes()) {
  hydrateRoot(container, <App />);
} else {
  root.render(<App />);
}
