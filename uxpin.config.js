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
    ],
    webpackConfig: "webpack.config.js",
    wrapper: "src/components/UXPinWrapper/UXPinWrapper.js",
  },
  name: "React-Bootstrap-UXPin-Merge",
};
