<<<<<<< HEAD
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
  ],
=======
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
>>>>>>> cb4f0b4f7e2dab65325df574762a4668ec9e8043
};
