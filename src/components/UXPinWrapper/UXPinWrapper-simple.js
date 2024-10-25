// eslint-disable-next-line no-unused-vars
import React from "react";
import { MD2DarkTheme, PaperProvider } from "react-native-paper";

const theme = {
  ...MD2DarkTheme,

  // Specify a custom nested property
  colors: {
    ...MD2DarkTheme.colors,
    primary: "#ff0000",
  },
};

export default function UXPinWrapper({ children }) {
  const icons = document.createElement("link");
  icons.setAttribute(
    "href",
    "https://fonts.googleapis.com/icon?family=Material+Icons"
  );
  icons.setAttribute("rel", "stylesheet");
  document.head.appendChild(icons);

  return <PaperProvider theme={theme}>{children}</PaperProvider>;
}
