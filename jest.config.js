module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '.(css|less|scss)$': 'identity-obj-proxy',
        'components/(.*)': '<rootDir>/src/components/$1',
        '^@utils/(.*)': '<rootDir>/src/utils/$1',
        '^@common/(.*)': '<rootDir>/src/components/common/$1'
    },
};
