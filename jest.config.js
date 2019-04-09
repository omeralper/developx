module.exports = {
    collectCoverageFrom: [
        "src/**/*.ts","src/**/*.tsx"
    ],
    transform: {
        ".(|ts|tsx)" : "ts-jest"
    },
    setupTestFrameworkScriptFile : "<rootDir>/jest-setup.js"
}