module.exports = {
    collectCoverage: true,
    moduleNameMapper: {
        "\\.(css|less|html)$": "<rootDir>/__test__/__mocks__/styleMock.js",
        "bootstrap-input-spinner": "<rootDir>/__test__/__mocks__/styleMock.js"
    },
    "modulePaths": [
        "<rootDir>", "<rootDir>/node_modules"
    ],
    transform: {
        "^.+\\.html?$": '<rootDir>/__test__/utils/htmlLoader.js',
        '\\.js$': 'babel-jest'
    }
    // transform: { '\\.js$': 'babel-jest', },
};
