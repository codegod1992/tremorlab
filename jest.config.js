/* eslint-disable no-undef */
module.exports = {
    testEnvironment: 'jsdom',
    moduleDirectories: ['node_modules', 'src'],
    moduleNameMapper: {
        '.(css|less|scss)$': 'identity-obj-proxy',
        'components/(.*)': '<rootDir>/src/components/$1',
        'assets/(.*)': '<rootDir>/src/assets/$1',
        '^@common/(.*)': '<rootDir>/src/components/common/$1'
    },
};
