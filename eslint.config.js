// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");

module.exports = defineConfig([
  ...expoConfig,
  eslintPluginPrettierRecommended,
  {
    plugins: {
      "react-native": require("eslint-plugin-react-native"),
    },
    rules: {
      // Import ordering rules
      "import/order": [
        "error",
        {
          groups: [
            "builtin", // Node.js built-in modules
            "external", // npm packages
            "internal", // Internal modules
            "parent", // Parent directories
            "sibling", // Same directory
            "index", // Index files
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "import/newline-after-import": ["error", { count: 1 }],
      "import/no-duplicates": "error",

      // React Native specific rules
      "react-native/no-unused-styles": "error",
    },
  },
  {
    ignores: ["dist/*"],
  },
]);
