module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "class-methods-use-this": "off", //não sera permitido os metodo de uma classe utilizar o this
    "no-param-reassign": "off", // receber um parametro e fazer alterações
    "camelcase": "off",
    "no-unused-vars": ["error", {"argsIgnorePattern": "next"}],
  },
};
