module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
    '^.+\\.css$': 'jest-transform-stub',
  },
  transformIgnorePatterns: ['node_modules/(?!your-module)'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
};
