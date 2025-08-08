const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    ...tsJestTransformCfg,
    collectCoverage: true,
    collectCoverageFrom: [
      "src/**/*.{ts}",
    ],
  },

  coverageThreshold: {

    global: {
      lines: 90,
      branches: 90,
      functions: 90,
      statements: 90,
    },
  }
}