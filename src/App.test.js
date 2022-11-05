import React from "react";
// import ReactDOM from 'react-dom';
import App from "./App";
import { createRoot } from "react-dom/client";

it("renders without crashing", () => {
  const container = document.createElement("div");
  // ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
  const root = createRoot(container);
  root.render(<App />);
});
