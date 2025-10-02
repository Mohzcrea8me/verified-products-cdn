import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "index.js",
  output: {
    file: "dist/index.js",
    format: "iife",
    name: "verifiedProductsCdn",
  },
  plugins: [
    resolve({
      browser: true,
      preferBuiltins: false,
    }),
    commonjs({
      include: "node_modules/**",
      // Optionally:
      namedExports: {
        "node_modules/form-data/lib/form_data.js": ["default"],
      },
    }),
  ],
};
