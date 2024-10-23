
import { MD2LightTheme } from "react-native-paper";

const boilerplateTheme = { ...MD2LightTheme,

  // Specify a custom nested property
  colors: {
    ...MD2LightTheme.colors,
    primary: "green",
  },
};

export default boilerplateTheme;

