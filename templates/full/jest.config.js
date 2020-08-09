module.exports = {
  rootDir: '.',
  moduleFileExtensions: ['ts', 'js', 'json'],
  transform: {
    '\\.(j|t)s$': 'babel-jest',
  },
  testEnvironment: 'node',
  testRegex: '\\.(test|spec)\\.(j|t)s$',
  setupFilesAfterEnv: ['./jest.setup.js'],
  collectCoverageFrom: [
    'src/**/*.{js,ts}',
    '!**/index.{js,ts}',
    '!**/*.{spec,test,mock}.{js,ts}',
    '!**/{__tests__,tests,__mocks__,mocks}/**/*',
  ],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  reporters: ['default', 'jest-junit'],
};
