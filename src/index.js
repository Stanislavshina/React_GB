/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import ReactDOM from "react-dom/client";
import { MessageList, Header, ChatList } from "./components";
import "./global.css";
import { ThemeProvider, createTheme } from "@mui/material";
import { Foo } from "./components/projectGB/reactHooks";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Header />
      <div className="main">
        <ChatList />
        <MessageList />
      </div>
    </ThemeProvider>
    {/* <Foo /> */}
  </React.StrictMode>
);
