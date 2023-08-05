const pkg = require('./package.json');

module.exports = {
  displayName: pkg.name,
  testEnvironment: '<rootDir>/test/config/testEnvironment.js',
  globalSetup: '<rootDir>/test/config/mongo-es/setup.js',
  globalTeardown: '<rootDir>/test/config/mongo-es/teardown.js',
  setupFiles: ['<rootDir>/test/config/mongo-es/setupFiles.js'],
  rootDir: './',
  clearMocks: true,
  testPathIgnorePatterns: ['/node_modules/', './dist', '__generated__'],
  transformIgnorePatterns: ['node_modules/(?!d3-random)'],
  resetModules: false,
  transform: {
    '^.+\\.(js|ts|tsx)?$': 'babel-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts|tsx)?$',
  moduleFileExtensions: ['ts', 'js', 'tsx', 'json'],
  cacheDirectory: '.jest-cache',
};
