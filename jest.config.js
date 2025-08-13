import { createDefaultPreset } from "ts-jest";
const tsJestTransformCfg = createDefaultPreset().transform;
/** @type {import("jest").Config} **/
export const testEnvironment = "node";
export const transform = {
  ...tsJestTransformCfg,
};
export const coverageThreshold = {
  global: {
    branches: 100,
    functions: 100,
    lines: 100,
    statements: 100,
  },
};