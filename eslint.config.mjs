import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // 类型可以使用 any
      "@typescript-eslint/no-explicit-any": "off",
      // 允许使用 console
      "no-console": "off",
      // 允许使用 debugger
      "no-debugger": "off",
      // 允许使用 require
      "global-require": "off",
      // 允许使用 module.exports
      "no-restricted-modules": "off",
    }
  }

];

export default eslintConfig;
