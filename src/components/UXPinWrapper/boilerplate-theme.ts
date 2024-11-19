
import { MD3LightTheme } from "react-native-paper";


const customThemeFonts = Object.fromEntries(
  Object.entries(MD3LightTheme.fonts).map(
    ([variantName, variantProperties]) => [
      variantName,
      { ...variantProperties, fontFamily: 'Lato' },
    ]
  )
);


const boilerplateTheme = {
  ...MD3LightTheme,
  fonts: 
    customThemeFonts,
  colors: {
    ...MD3LightTheme.colors,
  },
};

export default boilerplateTheme;

