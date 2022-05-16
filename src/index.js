/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import ReactDOM from "react-dom/client";
import { ChatGb } from "./components/projectGB/classChat";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>GB CHAT</h1>
    <ChatGb />
  </React.StrictMode>
);
