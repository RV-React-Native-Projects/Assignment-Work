module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    env: {
      production: {
        plugins: ["react-native-paper/babel"],
      },
    },
    // assets: ["./assets/fonts"],
  };
};

// module.exports = function (api) {
//   api.cache(false);
//   return {
//     presets: ["babel-preset-expo", "@expo/next-adapter/babel"],
//     plugins: [
//       ["@babel/plugin-proposal-class-properties", { loose: false }],
//       ["@babel/plugin-proposal-private-methods", { loose: false }],
//       "react-native-reanimated/plugin",
//     ],
//   };
// };
