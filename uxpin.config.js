module.exports = {
  components: {
    categories: [
      {
        name: "react native paper",
        include: [
          "src/components/ActivityIndicator/ActivityIndicator.jsx",
          "src/components/Badge/Badge.jsx",
          "src/components/Chip/Chip.jsx",
          "src/components/Divider/Divider.jsx",
          "src/components/HelperText/HelperText.jsx",
          "src/components/IconButton/IconButton.jsx",
          "src/components/Icon/Icon.jsx",
          "src/components/Modal/Modal.jsx",
          "src/components/Portal/Portal.jsx",
          "src/components/Searchbar/Searchbar.jsx",
          "src/components/ProgressBar/ProgressBar.jsx",
          "src/components/Snackbar/Snackbar.jsx",
          "src/components/Surface/Surface.jsx",
          "src/components/Switch/Switch.jsx",
          "src/components/Text/Text.jsx",
          "src/components/Tooltip/Tooltip.jsx",
          "src/components/TouchableRipple/TouchableRipple.jsx",
        ],
      },
      {
        name: "Inputs",
        include: [
          "src/components/Button/Button.tsx",
          "src/components/TextInput/TextInput.tsx",
        ],
      },
      {
        name: "Card",
        include: [
          "src/components/Card/Card.tsx",
          "src/components/Card/Title/Title.tsx",
          "src/components/Card/Content/Content.tsx",
          "src/components/Card/Actions/Actions.tsx",
          "src/components/Card/Cover/Cover.tsx",
        ],
      },
      {
        name: "Utilities",
        include: ["src/components/ThemeCustomizer/ThemeCustomizer.js"],
      },
    ],
    webpackConfig: "webpack.config.js",
    wrapper: "src/components/UXPinWrapper/UXPinWrapper.js",
  },
  name: "React-Native-Paper-UXPin-Merge",
  settings: { useUXPinProps: true }, //Adds style and additional tags property
};
