const path = require("path");

module.exports = {
  output: {
    publicPath: "",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "react-native$": require.resolve("react-native-web"),
      "react-native-vector-icons": "react-native-vector-icons/dist",
      "../Utilities/Platform": "react-native-web/dist/exports/Platform",
      "../../Utilities/Platform": "react-native-web/dist/exports/Platform",
      "../../../../Libraries/Utilities/Platform":
        "react-native-web/dist/exports/Platform",
      "./Platform": "react-native-web/dist/exports/Platform",
      "react-native-safe-area-context":
        "expo-dev-menu/vendored/react-native-safe-area-context/src",
    },
  },
  module: {
    rules: [
      {
        test: /.[tj]sx?$/,
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "node_modules/react-native"),
          path.resolve(__dirname, "node_modules/@react-native"),
          path.resolve(__dirname, "node_modules/@react-navigation"),
          path.resolve(
            __dirname,
            "node_modules/expo-dev-menu/vendored/react-native-safe-area-context/src"
          ),
        ],
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              presets: ["module:metro-react-native-babel-preset"],
              plugins: [["react-native-web", { commonjs: true }]],
            },
          },
        ],
      },

      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude:
          /node_modules\/(?!react-native-paper|react-native-safe-area-context|react-native-vector-icons)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/, // Process CSS files
        use: ["style-loader", "css-loader"], // Inject styles into DOM
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.ttf$/,
        include: path.resolve(
          __dirname,
          "node_modules/react-native-vector-icons"
        ),
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]",
          },
        },
      },
    ],
  },
};
