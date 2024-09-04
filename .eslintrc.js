module.exports = {
  extends: ["airbnb-typescript", "prettier"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "react/jsx-filename-extension": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
  }
};