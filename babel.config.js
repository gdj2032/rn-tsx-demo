module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-export-namespace-from', { legacy: true }],
    ["import", { libraryName: "@ant-design/react-native" }],
  ],
};
