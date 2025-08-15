import { createDefaultPreset } from "ts-jest";
const tsJestTransformCfg = createDefaultPreset().transform;
/** @type {import("jest").Config} **/
export const testEnvironment = "node";
export const transform = {
  ...tsJestTransformCfg,
};
export const coverageThreshold = {
  global: {
    branches: 91,
    functions: 90,
    lines: 91,
    statements: 90,
  },
};