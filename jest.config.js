'use strict';

module.exports = {
  collectCoverageFrom: [
    'src/application/use_cases/**/*.{js,jsx,ts,tsx}',
    // 'src/**/*.{js,jsx,ts,tsx}',
    // '!src/config/environments.js',
    // '!src/entities/*',
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.js?(x)',
    '<rootDir>/src/**/?(*.)(spec|test).js?(x)',
  ],
};
