// @ts-check

import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";

export default tseslint.config(
  tseslint.configs.recommended,
  globalIgnores(["dist/*"])
);
