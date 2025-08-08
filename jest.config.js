const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    ...tsJestTransformCfg,
    collectCoverage : true,
  },
  
  coverageThreshold: {
    
    global: {
      branches: 90,
      functions: 95,
      lines: 90,
      statements: 90,
    },
  }
}