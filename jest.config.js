module.exports = {
  rootDir: '.',
  moduleFileExtensions: ['ts', 'js', 'json'],
  transform: {
    '\\.(j|t)s$': 'babel-jest',
  },
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/**/?(*.)+(spec|test).[jt]s'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,ts}',
    '!**/index.{js,ts}',
    '!**/*.{spec,test,mock}.{js,ts}',
    '!**/{__tests__,tests,__mocks__,mocks}/**/*',
  ],
  coverageThreshold: {
    global: {
      statements: 30,
      branches: 30,
      functions: 30,
      lines: 30,
    },
  },
};
