module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    './jest/jest-setup.js',
    './jest/ImagePickerManager-setup.js'
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-native-community|@react-navigation)',
  ],
  "moduleFileExtensions": [
    "ts", "tsx", "js", "jsx", "json", "node"
  ]
};
