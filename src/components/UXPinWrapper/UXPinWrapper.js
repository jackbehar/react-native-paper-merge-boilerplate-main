/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import defaultTheme from "./boilerplate-theme";

import { MD2DarkTheme, PaperProvider, useTheme } from "react-native-paper";

// const defaultTheme = {
//   ...MD2DarkTheme,

//   // Specify a custom nested property
//   colors: {
//     ...MD2DarkTheme.colors,
//     primary: "#ff0000",
//   },
// };

export const ThemeContext = React.createContext({});
const completeDefaultTheme = defaultTheme;

let listeners = [];

const addListener = (listener) => {
  listeners.push(listener);
};

const removeListener = (listener) => {
  listeners = listeners.filter((lis) => lis !== listener);
};

//global theme object for all wrapper instances
let themeOptions = {
  theme: completeDefaultTheme,
};

//allows to update the global theme object and updates all wrapper instances with the new theme
//expects a function as a parameter, which itself expects the old theme as a parameter
const setThemeOptions = (callback) => {
  //the callback function is called and given the old theme as a parameter
  //the result of the callback function is saved in themeOptions (the new theme)
  themeOptions = callback(themeOptions);
  console.log("theme was updated");
  //each listener is a function which sets the theme in the state of its UXPinWrapper component to a given theme
  //each function (listener) is executed with the given theme as a parameter, so all UXPinWrapper instances are updated with the same theme
  listeners.forEach((listener) => {
    listener(themeOptions);
  });
};

export default function UXPinWrapper(props) {
  //Link Google fonts
  if (!document.getElementById("fluent-merge-font-DmSans")) {
    let DmSans = document.createElement("link");
    DmSans.setAttribute(
      "href",
      "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
    );
    DmSans.setAttribute("rel", "stylesheet");
    DmSans.setAttribute("id", "fluent-merge-font-DmSans");
    document.head.appendChild(DmSans);
  }

  if (!document.getElementById("fluent-merge-font-SpaceGrotesk")) {
    let SpaceGrotesk = document.createElement("link");
    SpaceGrotesk.setAttribute(
      "href",
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap"
    );
    SpaceGrotesk.setAttribute("rel", "stylesheet");
    SpaceGrotesk.setAttribute("id", "fluent-merge-font-SpaceGrotesk");
    document.head.appendChild(SpaceGrotesk);
  }

  const [theme, setTheme] = React.useState(themeOptions);

  React.useEffect(() => {
    //updates the component state to a given theme
    const onThemeChange = (newTheme) => {
      setTheme(newTheme);
    };
    console.log(theme);
    //the component adds a function to the listener array, which allows to update its state with a given theme
    addListener(onThemeChange);
    //the listener is removed when the component unmounts (is deleted from the canvas)
    return () => removeListener(onThemeChange);
  });

  return (
    <ThemeContext.Provider value={[theme, setThemeOptions]}>
      <PaperProvider theme={{ ...themeOptions.theme }} {...props}>
        {props.children}
      </PaperProvider>
    </ThemeContext.Provider>
  );
}
