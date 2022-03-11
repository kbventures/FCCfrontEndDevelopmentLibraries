// Telling Jest Where Files Are
module.exports = {
    setupFiles: [
        '<rootDir>/src/__test__/setupTests.js',
    ],
    "testEnvironment": "jsdom"
};