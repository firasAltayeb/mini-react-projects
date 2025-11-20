// eslint.config.js
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactNative from 'eslint-plugin-react-native';
import globals from 'globals';
import babelParser from '@babel/eslint-parser';

export default [
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-react'], // <- enables JSX parsing
        },
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },    
    plugins: {
      react: eslintPluginReact,
      'react-native': eslintPluginReactNative,
    },
    rules: {
      'react-native/no-unused-styles': 'warn',
      'react-native/split-platform-components': 'warn',
      'react-native/no-inline-styles': 'off',
      'react-native/no-color-literals': 'off',
      'react-native/no-raw-text': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
];
