import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create compat instance for classic ESLint config (like next/core-web-vitals)
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // Import classic config
  ...compat.extends("next/core-web-vitals"),

  // Add custom rules
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off",
    },
  },
];
