module.exports = {
  components: {
    categories: [
      {
        name: "Test",
        include: [
          "src/components/Button/Button.tsx",
          "src/components/TextInput/TextInput.tsx",
          "src/components/ThemeCustomizer/ThemeCustomizer.js",
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
    ],
    webpackConfig: "webpack.config.js",
    wrapper: "src/components/UXPinWrapper/UXPinWrapper.js",
  },
  name: "React-Native-Paper-UXPin-Merge",
  settings: { useUXPinProps: true }, //Adds style and additional tags property
};
