/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
};