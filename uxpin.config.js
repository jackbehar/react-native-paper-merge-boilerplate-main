module.exports = {
  components: {
    categories: [
      {
        name: "react native paper",
        include: [
          "src/components/ActivityIndicator/ActivityIndicator.jsx",
          "src/components/Badge/Badge.jsx",
          "src/components/Banner/Banner.jsx",
          "src/components/Button/Button.tsx",
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
          "src/components/Checkbox/Checkbox.jsx", //Issue with uxpinbind
          "src/components/Checkbox/Item/Item.jsx", //Issue with uxpinbind
          "src/components/Checkbox/Android/Android.jsx", //Issue with uxpinbind
          "src/components/Checkbox/IOS/IOS.jsx", //Issue with uxpinbind
          "src/components/Text/Text.jsx",
          "src/components/Tooltip/Tooltip.jsx", //Issue with positioning tooltip
          "src/components/TouchableRipple/TouchableRipple.jsx",
          "src/components/Avatar/Image/Image.jsx",
          "src/components/Avatar/Icon/Icon.jsx",
          "src/components/Avatar/Text/Text.jsx",
          "src/components/BottomNavigation/BottomNavigation.jsx", //Not working
          "src/components/BottomNavigation/Bar/Bar.jsx", //Not working
          "src/components/Card/Card.tsx",
          "src/components/Card/Title/Title.tsx",
          "src/components/Card/Content/Content.tsx",
          "src/components/Card/Actions/Actions.tsx",
          "src/components/Card/Cover/Cover.tsx",
          "src/components/ListItem/ListItem.jsx",
          "src/components/ListAccordion/ListAccordion.jsx",
          "src/components/TextInput/TextInput.jsx",
        ],
      },

      {
        name: "Empty Namespaces",
        include: ["src/components/Avatar/Avatar.jsx"],
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
