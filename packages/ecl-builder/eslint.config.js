/*
 * ESLint flat configuration for ecl-builder.
 *
 * @author John Grimes
 */

import js from "@eslint/js";
import jsdoc from "eslint-plugin-jsdoc";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import unicorn from "eslint-plugin-unicorn";
import tseslint from "typescript-eslint";

export default tseslint.config(
  // Global ignores.
  {
    ignores: [
      "src/grammar/**",
      "src/parser/**",
      "lib/**",
      "dist/**",
      "coverage/**",
      "storybook-static/**",
      ".storybook/**",
      "eslint.config.js",
    ],
  },

  // Base recommended rules.
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  // React, hooks, and accessibility.
  react.configs.flat.recommended,
  reactHooks.configs.flat.recommended,
  jsxA11y.flatConfigs.recommended,

  // JSDoc.
  jsdoc.configs["flat/recommended-typescript"],

  // Project-specific configuration.
  {
    plugins: {
      unicorn,
      "react-refresh": reactRefresh,
    },
    settings: {
      react: { version: "17" },
    },
    rules: {
      // React.
      "react/prop-types": "off",
      "react/jsx-pascal-case": "error",
      "react/jsx-boolean-value": ["error", "never"],
      "react/self-closing-comp": "error",

      // React Hooks.
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // JSDoc. TypeScript types serve as the primary documentation for
      // parameters and return values, so description-level requirements are
      // relaxed.
      "jsdoc/require-jsdoc": [
        "warn",
        {
          publicOnly: true,
          require: {
            FunctionDeclaration: true,
            MethodDefinition: false,
            ArrowFunctionExpression: false,
            FunctionExpression: false,
          },
        },
      ],
      "jsdoc/require-param-description": "off",
      "jsdoc/require-returns": "off",
    },
  },
);
