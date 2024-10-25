module.exports = {
  components: {
    categories: [
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
