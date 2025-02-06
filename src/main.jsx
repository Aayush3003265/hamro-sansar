import React from "react";
import ReactDOM from "react-dom/client";

import { FakeAuthProvider } from "./contexts/FakeAuthProvider";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FakeAuthProvider>
      <App />
    </FakeAuthProvider>
  </React.StrictMode>
);
