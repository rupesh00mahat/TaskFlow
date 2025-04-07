/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-fixed-jsdom',
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'js', 'json','tsx'],
    testMatch: ['**/__tests__/**/*.test.ts','**/__tests__/**/*.test.tsx','**/*.spec.ts','**/*.spec.tsx'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    clearMocks: true,
    transformIgnorePatterns: [
        "/node_modules/(?!uuid/)"
    ],
    moduleNameMapper: {
        "uuid": require.resolve('uuid')
    }
}