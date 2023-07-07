import React from "react";
import "./index.css";
import App from "./App";
import "./i18n/config";

import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);
const app = <App />;
root.render(app);
//TODO Figure this out
// if (container.hasChildNodes()) {
// hydrateRoot(container, app);
// } else {
//   root.render(app);
// }
