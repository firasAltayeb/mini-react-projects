import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        __DEV__: "readonly",
      },
    },
    plugins: {
      js,
      react: pluginReact,
    },
    extends: [js.configs.recommended, pluginReact.configs.flat.recommended],
    rules: {
      "react/jsx-no-undef": "error", // 🚨 catches missing Text imports
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]);
