module.exports = {
    testEnvironment: "jsdom",
    moduleNameMapper: {
        ".(css|less|scss)$": "identity-obj-proxy",
        "^@utils/(.*)": "<rootDir>/src/components/utils/$1"
    },
};
